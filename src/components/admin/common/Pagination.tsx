import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.xl} 0;
`;

const PageButton = styled.button<{ active?: boolean }>`
  min-width: 40px;
  height: 40px;
  padding: 0 ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.active ? theme.colors.primary : 'var(--color-bg-white)'};
  color: ${props => props.active ? 'white' : 'var(--color-text-primary)'};
  font-size: ${theme.fontSizes.base};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${props => props.active ? theme.colors.primaryDark : 'var(--color-bg-light)'};
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  margin: 0 ${theme.spacing.md};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];
  const showEllipsis = totalPages > 7;

  if (showEllipsis) {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  }

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </PageButton>

      {pages.map((page, index) => (
        typeof page === 'number' ? (
          <PageButton
            key={index}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ) : (
          <PageInfo key={index}>{page}</PageInfo>
        )
      ))}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </PageButton>
    </PaginationContainer>
  );
}
