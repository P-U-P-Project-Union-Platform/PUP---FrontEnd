import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projectService, filterProjects } from '../../services/projectService';
import { PROJECT_CATEGORIES, type ProjectCategory } from '../../types/project';
import SearchBar from '../../components/projects/SearchBar';
import ProjectCard from '../../components/projects/ProjectCard';
import { initializeMockData } from '../../services/mockData';

const Container = styled.div`
  background: #f9f9f9;
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: 768px) {
    padding: 80px 20px 40px;
  }
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SearchSection = styled.div`
  margin-bottom: 2rem;
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const FilterLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  font-weight: 600;
`;

const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryChip = styled.button<{ $active: boolean }>`
  background: ${(props) => (props.$active ? '#4f46e5' : '#fff')};
  color: ${(props) => (props.$active ? 'white' : '#666')};
  border: 1px solid ${(props) => (props.$active ? '#4f46e5' : '#ddd')};
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: ${(props) => (props.$active ? '#4338ca' : '#f5f5f5')};
    border-color: ${(props) => (props.$active ? '#4338ca' : '#bbb')};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 1rem;
`;

const EmptyText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const EmptyHint = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

const RegisterButton = styled(Link)`
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const ResultCount = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

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
            {filters.search || filters.category
              ? '검색 결과가 없습니다'
              : '등록된 프로젝트가 없습니다'}
          </EmptyText>
          <EmptyHint>
            {filters.search || filters.category
              ? '다른 검색어나 필터를 시도해보세요'
              : '첫 번째 프로젝트를 등록해보세요!'}
          </EmptyHint>
          {!filters.search && !filters.category && (
            <RegisterButton to="/projects/register">
              프로젝트 등록하기
            </RegisterButton>
          )}
        </EmptyState>
      )}
    </Container>
  );
}
