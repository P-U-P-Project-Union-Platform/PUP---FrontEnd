import {
  Container,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  ClearButton,
} from '../../styles/components/projects/searchBarStyles';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = '프로젝트 검색...',
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleClear = () => {
    onChange('');
    onSearch();
  };

  return (
    <Container>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        {value ? (
          <ClearButton onClick={handleClear} type="button">
            ✕
          </ClearButton>
        ) : (
          <SearchIcon>🔍</SearchIcon>
        )}
      </SearchInputWrapper>
    </Container>
  );
}
