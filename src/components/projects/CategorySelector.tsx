import styled from 'styled-components';
import { PROJECT_CATEGORIES, type ProjectCategory } from '../../types/project';

const Container = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryButton = styled.button<{ selected: boolean }>`
  background: ${(props) => (props.selected ? '#4f46e5' : '#fff')};
  color: ${(props) => (props.selected ? 'white' : '#333')};
  border: 1px solid ${(props) => (props.selected ? '#4f46e5' : '#ddd')};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: ${(props) => (props.selected ? '600' : '400')};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: ${(props) => (props.selected ? '#4338ca' : '#f5f5f5')};
    border-color: ${(props) => (props.selected ? '#4338ca' : '#bbb')};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Icon = styled.span`
  font-size: 18px;
`;

interface CategorySelectorProps {
  value: ProjectCategory | null;
  onChange: (category: ProjectCategory) => void;
}

export default function CategorySelector({
  value,
  onChange,
}: CategorySelectorProps) {
  return (
    <Container>
      <Label>카테고리 *</Label>
      <CategoryGrid>
        {PROJECT_CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            selected={value === category.id}
            onClick={() => onChange(category.id)}
            type="button"
          >
            <Icon>{category.icon}</Icon>
            <span>{category.label}</span>
          </CategoryButton>
        ))}
      </CategoryGrid>
    </Container>
  );
}
