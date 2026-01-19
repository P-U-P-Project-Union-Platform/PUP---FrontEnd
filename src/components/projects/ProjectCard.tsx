import type { Project } from '../../types/project';
import { PROJECT_CATEGORIES } from '../../types/project';
import {
  Card,
  Thumbnail,
  ThumbnailImage,
  Content,
  CategoryBadge,
  Title,
  Description,
  TagList,
  Tag,
  TechStack,
  Tech,
} from '../../styles/components/projects/projectCardStyles';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const category = PROJECT_CATEGORIES.find((c) => c.id === project.category);

  return (
    <Card to={`/projects/${project.id}`}>
      <Thumbnail $hasImage={!!project.thumbnail}>
        {project.thumbnail ? (
          <ThumbnailImage src={project.thumbnail} alt={project.title} />
        ) : (
          <span>{category?.icon || '📦'}</span>
        )}
      </Thumbnail>
      <Content>
        <CategoryBadge>
          {category?.icon} {category?.label}
        </CategoryBadge>

        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        {project.tags.length > 0 && (
          <TagList>
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            {project.tags.length > 3 && <Tag>+{project.tags.length - 3}</Tag>}
          </TagList>
        )}

        <TechStack>
          {project.techStack.slice(0, 4).map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
          {project.techStack.length > 4 && (
            <Tech>+{project.techStack.length - 4}</Tech>
          )}
        </TechStack>
      </Content>
    </Card>
  );
}
