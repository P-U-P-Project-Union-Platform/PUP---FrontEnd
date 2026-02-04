import type { CommunityPost } from '../mocks';

const API_BASE_URL = '/api'; // 백엔드 API URL (환경변수로 관리 권장)

/**
 * 커뮤니티 게시글 CRUD 서비스
 * 백엔드 API 연동 준비 완료
 */
export const communityService = {
  /**
   * 게시글 삭제
   */
  async delete(postId: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/community/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // 인증 토큰 추가 필요
        },
      });

      if (!response.ok) {
        throw new Error('게시글 삭제 실패');
      }

      return true;
    } catch (error) {
      console.error('게시글 삭제 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 게시글 수정
   */
  async update(postId: number, data: Partial<CommunityPost>): Promise<CommunityPost> {
    try {
      const response = await fetch(`${API_BASE_URL}/community/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('게시글 수정 실패');
      }

      return response.json();
    } catch (error) {
      console.error('게시글 수정 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 게시글 생성
   */
  async create(data: Omit<CommunityPost, 'id' | 'views' | 'comments' | 'likes'>): Promise<CommunityPost> {
    try {
      const response = await fetch(`${API_BASE_URL}/community`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('게시글 생성 실패');
      }

      return response.json();
    } catch (error) {
      console.error('게시글 생성 중 오류 발생:', error);
      throw error;
    }
  },
};
