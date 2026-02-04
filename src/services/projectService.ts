import type {
  Project,
  ProjectFormData,
  ProjectCategory,
  SearchFilters,
} from '../types/project';

const STORAGE_KEY = 'pup_projects';
const API_BASE_URL = '/api'; // 백엔드 API URL (환경변수로 관리 권장)

/**
 * 프로젝트 CRUD 서비스
 * 백엔드 API 연동 준비 완료
 */
export const projectService = {
  /**
   * 모든 프로젝트 가져오기
   */
  getAll(): Project[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('프로젝트 목록 로드 실패:', error);
      return [];
    }
  },

  /**
   * ID로 프로젝트 찾기
   */
  getById(id: string): Project | null {
    const projects = this.getAll();
    return projects.find((p) => p.id === id) || null;
  },

  /**
   * 새 프로젝트 생성
   */
  create(formData: ProjectFormData): Project {
    if (!formData.category) {
      throw new Error('카테고리는 필수입니다.');
    }

    const newProject: Project = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      thumbnail: formData.thumbnail,
      category: formData.category,
      tags: formData.tags,
      techStack: formData.techStack,
      github: formData.github,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: formData.author || { id: 'user-1', name: '익명' },
      views: 0,
      likes: 0,
      status: formData.status || 'in_progress',
      positions: formData.positions,
    };

    const projects = this.getAll();
    projects.unshift(newProject); // 최신순 (맨 앞에 추가)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      return newProject;
    } catch (error) {
      if ((error as Error).name === 'QuotaExceededError') {
        throw new Error(
          '저장 공간이 부족합니다. 오래된 프로젝트를 삭제해주세요.'
        );
      }
      throw error;
    }
  },

  /**
   * 프로젝트 수정
   */
  update(id: string, formData: Partial<ProjectFormData>): Project | null {
    const projects = this.getAll();
    const index = projects.findIndex((p) => p.id === id);

    if (index === -1) return null;

    projects[index] = {
      ...projects[index],
      ...formData,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      return projects[index];
    } catch (error) {
      if ((error as Error).name === 'QuotaExceededError') {
        throw new Error('저장 공간이 부족합니다.');
      }
      throw error;
    }
  },

  /**
   * 프로젝트 삭제 (백엔드 API 연동)
   */
  async deleteAsync(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // 인증 토큰 추가 필요
        },
      });

      if (!response.ok) {
        throw new Error('프로젝트 삭제 실패');
      }

      return true;
    } catch (error) {
      console.error('프로젝트 삭제 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 프로젝트 삭제 (LocalStorage - 임시)
   * 백엔드 연동 후 deleteAsync 사용 권장
   */
  delete(id: string): boolean {
    const projects = this.getAll();
    const filtered = projects.filter((p) => p.id !== id);

    if (filtered.length === projects.length) return false;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  /**
   * 프로젝트 지원 (백엔드 API 연동)
   */
  async apply(projectId: string, data: {
    positionName: string;
    userId: string;
    message?: string;
  }): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // 인증 토큰 추가 필요
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('프로젝트 지원 실패');
      }

      return true;
    } catch (error) {
      console.error('프로젝트 지원 중 오류 발생:', error);
      throw error;
    }
  },
};

/**
 * 프로젝트 검색 및 필터링
 */
export function filterProjects(
  projects: Project[],
  filters: SearchFilters
): Project[] {
  return projects.filter((project) => {
    // 검색어 필터 (제목, 설명, 기술 스택)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );
      if (!matchesSearch) return false;
    }

    // 카테고리 필터
    if (filters.category && project.category !== filters.category) {
      return false;
    }

    // 태그 필터 (OR 조건: 하나라도 일치하면 표시)
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some((filterTag) =>
        project.tags.includes(filterTag)
      );
      if (!hasMatchingTag) return false;
    }

    return true;
  });
}
