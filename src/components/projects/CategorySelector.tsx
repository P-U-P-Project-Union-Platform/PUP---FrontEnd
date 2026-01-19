import { PROJECT_CATEGORIES, type ProjectCategory } from '../../types/project';
import {
  Container,
  Label,
  CategoryGrid,
  CategoryButton,
  Icon,
} from '../../styles/components/projects/categorySelectorStyles';

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
