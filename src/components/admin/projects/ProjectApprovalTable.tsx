import { useState } from 'react';
import type { Project, ProjectApprovalStatus } from '../../../types';
import DataTable from '../common/DataTable';
import { Badge } from '../../../styles/components/admin/dataTableStyles';
import ProjectDetailModal from './ProjectDetailModal';
import ApprovalActions from './ApprovalActions';

interface ProjectApprovalTableProps {
  projects: Project[];
  onApprove: (projectId: string) => void;
  onReject: (projectId: string, reason: string) => void;
}

export default function ProjectApprovalTable({
  projects,
  onApprove,
  onReject
}: ProjectApprovalTableProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getApprovalBadge = (status?: ProjectApprovalStatus) => {
    switch (status) {
      case 'approved': return 'success';
      case 'rejected': return 'danger';
      case 'pending': return 'warning';
      default: return 'info';
    }
  };

  const getApprovalText = (status?: ProjectApprovalStatus) => {
    switch (status) {
      case 'approved': return '승인됨';
      case 'rejected': return '거부됨';
      case 'pending': return '대기중';
      default: return '미정';
    }
  };

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      'web': '웹 개발',
      'mobile': '모바일 앱',
      'ai-ml': 'AI/ML',
      'game': '게임 개발',
      'design': 'UI/UX 디자인',
      'backend': '백엔드/인프라',
      'data': '데이터 분석',
      'etc': '기타'
    };
    return categories[category] || category;
  };

  const columns = [
    {
      key: 'title',
      label: '제목',
      width: '30%',
      render: (project: Project) => project.title
    },
    {
      key: 'author',
      label: '작성자',
      width: '15%',
      render: (project: Project) => project.author.name
    },
    {
      key: 'category',
      label: '카테고리',
      width: '15%',
      render: (project: Project) => getCategoryLabel(project.category)
    },
    {
      key: 'createdAt',
      label: '제출일',
      width: '15%',
      render: (project: Project) => new Date(project.createdAt).toLocaleDateString('ko-KR')
    },
    {
      key: 'approvalStatus',
      label: '상태',
      width: '10%',
      render: (project: Project) => (
        <Badge variant={getApprovalBadge(project.approvalStatus)}>
          {getApprovalText(project.approvalStatus)}
        </Badge>
      )
    },
    {
      key: 'actions',
      label: '작업',
      width: '15%',
      render: (project: Project) => (
        <div onClick={(e) => e.stopPropagation()}>
          {project.approvalStatus === 'pending' ? (
            <ApprovalActions
              projectId={project.id}
              onApprove={onApprove}
              onReject={onReject}
            />
          ) : (
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              {project.approvalStatus === 'approved' ? '승인 완료' : '거부됨'}
            </span>
          )}
        </div>
      )
    }
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={projects}
        onRowClick={(project) => setSelectedProject(project)}
        emptyMessage="프로젝트가 없습니다"
      />

      <ProjectDetailModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onApprove={onApprove}
        onReject={(projectId) => {
          setSelectedProject(null);
          // Show reject modal through ApprovalActions
        }}
      />
    </>
  );
}
