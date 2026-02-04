import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const FilterContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 300px;
  padding: ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  background: var(--color-bg-white);
  color: var(--color-text-primary);
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const FilterSelect = styled.select`
  padding: ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  background: var(--color-bg-white);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

interface Filter {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

interface SearchFilterProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: Filter[];
  filterValues?: Record<string, string>;
  onFilterChange?: (key: string, value: string) => void;
  searchPlaceholder?: string;
}

export default function SearchFilter({
  searchValue,
  onSearchChange,
  filters = [],
  filterValues = {},
  onFilterChange,
  searchPlaceholder = '검색...'
}: SearchFilterProps) {
  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {filters.map(filter => (
        <FilterSelect
          key={filter.key}
          value={filterValues[filter.key] || ''}
          onChange={(e) => onFilterChange?.(filter.key, e.target.value)}
        >
          <option value="">{filter.label}</option>
          {filter.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FilterSelect>
      ))}
    </FilterContainer>
  );
}
