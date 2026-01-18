import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projectService, filterProjects } from '../../services/projectService';
import { PROJECT_CATEGORIES, type ProjectCategory } from '../../types/project';
import SearchBar from '../../components/projects/SearchBar';
import ProjectCard from '../../components/projects/ProjectCard';
import { initializeMockData } from '../../services/mockData';
import {
  Container,
  Header,
  Title,
  SearchSection,
  FilterSection,
  FilterLabel,
  CategoryFilters,
  CategoryChip,
  Grid,
  EmptyState,
  EmptyIcon,
  EmptyText,
  EmptyHint,
  RegisterButton,
  ResultCount,
} from '../../styles/pages/projects/listStyles';

export default function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get('search') || ''
  );

  // Mock 데이터 초기화 (개발 모드에서만)
  useEffect(() => {
    initializeMockData();
  }, []);

  // URL에서 필터 읽기
  const filters = useMemo(
    () => ({
      search: searchParams.get('search') || undefined,
      category: (searchParams.get('category') as ProjectCategory) || undefined,
      tags: searchParams.get('tags')?.split(',').filter(Boolean),
    }),
    [searchParams]
  );

  // 프로젝트 목록 가져오기 및 필터링
  const projects = useMemo(() => {
    const allProjects = projectService.getAll();
    return filterProjects(allProjects, filters);
  }, [filters]);

  // 검색 실행
  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    setSearchParams(params);
  };

  // 카테고리 필터 변경
  const handleCategoryFilter = (categoryId: ProjectCategory | null) => {
    const params = new URLSearchParams(searchParams);

    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }

    setSearchParams(params);
  };

  // 태그 필터 토글
  const handleTagFilter = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    const currentTags = filters.tags || [];

    let newTags: string[];
    if (currentTags.includes(tag)) {
      // 이미 선택된 태그면 제거
      newTags = currentTags.filter(t => t !== tag);
    } else {
      // 선택되지 않은 태그면 추가
      newTags = [...currentTags, tag];
    }

    if (newTags.length > 0) {
      params.set('tags', newTags.join(','));
    } else {
      params.delete('tags');
    }

    setSearchParams(params);
  };

  // 모든 프로젝트에서 사용된 태그 추출
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projectService.getAll().forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, []);

  return (
    <Container>
      <Header>
        <Title>프로젝트</Title>

        <SearchSection>
          <SearchBar
            value={searchInput}
            onChange={setSearchInput}
            onSearch={() => handleSearch(searchInput)}
          />
        </SearchSection>

        <FilterSection>
          <FilterLabel>카테고리</FilterLabel>
          <CategoryFilters>
            <CategoryChip
              $active={!filters.category}
              onClick={() => handleCategoryFilter(null)}
            >
              전체
            </CategoryChip>
            {PROJECT_CATEGORIES.map((category) => (
              <CategoryChip
                key={category.id}
                $active={filters.category === category.id}
                onClick={() => handleCategoryFilter(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </CategoryChip>
            ))}
          </CategoryFilters>
        </FilterSection>

        {allTags.length > 0 && (
          <FilterSection>
            <FilterLabel>해시태그</FilterLabel>
            <CategoryFilters>
              {allTags.map((tag) => (
                <CategoryChip
                  key={tag}
                  $active={filters.tags?.includes(tag) || false}
                  onClick={() => handleTagFilter(tag)}
                >
                  {tag}
                </CategoryChip>
              ))}
            </CategoryFilters>
          </FilterSection>
        )}
      </Header>

      {projects.length > 0 ? (
        <>
          <Grid>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
          <ResultCount>
            총 {projectService.getAll().length}개 프로젝트 중 {projects.length}
            개 표시
          </ResultCount>
        </>
      ) : (
        <EmptyState>
          <EmptyIcon>📦</EmptyIcon>
          <EmptyText>
            {filters.search || filters.category || filters.tags?.length
              ? '검색 결과가 없습니다'
              : '등록된 프로젝트가 없습니다'}
          </EmptyText>
          <EmptyHint>
            {filters.search || filters.category || filters.tags?.length
              ? '다른 검색어나 필터를 시도해보세요'
              : '첫 번째 프로젝트를 등록해보세요!'}
          </EmptyHint>
          {!filters.search && !filters.category && !filters.tags?.length && (
            <RegisterButton to="/projects/register">
              프로젝트 등록하기
            </RegisterButton>
          )}
        </EmptyState>
      )}
    </Container>
  );
}
