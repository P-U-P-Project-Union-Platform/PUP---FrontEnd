import { useState, useMemo } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import type { ProjectApprovalStatus } from '../../types';
import ProjectApprovalTable from '../../components/admin/projects/ProjectApprovalTable';
import SearchFilter from '../../components/admin/common/SearchFilter';
import Pagination from '../../components/admin/common/Pagination';
import {
  ProjectManagementContainer,
  FilterTabs,
  FilterTab
} from '../../styles/pages/admin/projectManagementStyles';

const ITEMS_PER_PAGE = 10;

export default function ProjectManagement() {
  const { projects, approveProject, rejectProject } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ProjectApprovalStatus | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleApprove = (projectId: string) => {
    approveProject(projectId);
  };

  const handleReject = (projectId: string, reason: string) => {
    rejectProject(projectId, reason);
  };

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.author.name.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (activeFilter !== 'all') {
      result = result.filter(project => project.approvalStatus === activeFilter);
    }

    return result;
  }, [projects, searchQuery, activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getFilterCount = (filter: ProjectApprovalStatus | 'all') => {
    if (filter === 'all') return projects.length;
    return projects.filter(p => p.approvalStatus === filter).length;
  };

  return (
    <ProjectManagementContainer>
      <FilterTabs>
        <FilterTab
          active={activeFilter === 'all'}
          onClick={() => {
            setActiveFilter('all');
            setCurrentPage(1);
          }}
        >
          전체 ({getFilterCount('all')})
        </FilterTab>
        <FilterTab
          active={activeFilter === 'pending'}
          onClick={() => {
            setActiveFilter('pending');
            setCurrentPage(1);
          }}
        >
          대기중 ({getFilterCount('pending')})
        </FilterTab>
        <FilterTab
          active={activeFilter === 'approved'}
          onClick={() => {
            setActiveFilter('approved');
            setCurrentPage(1);
          }}
        >
          승인됨 ({getFilterCount('approved')})
        </FilterTab>
        <FilterTab
          active={activeFilter === 'rejected'}
          onClick={() => {
            setActiveFilter('rejected');
            setCurrentPage(1);
          }}
        >
          거부됨 ({getFilterCount('rejected')})
        </FilterTab>
      </FilterTabs>

      <SearchFilter
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="제목, 설명, 작성자로 검색..."
      />

      <ProjectApprovalTable
        projects={paginatedProjects}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </ProjectManagementContainer>
  );
}
