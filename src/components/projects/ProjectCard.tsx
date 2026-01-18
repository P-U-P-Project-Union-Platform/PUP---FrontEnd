import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Project } from '../../types/project';
import { PROJECT_CATEGORIES } from '../../types/project';

const Card = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const Thumbnail = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 180px;
  background: ${(props) =>
    props.$hasImage
      ? '#f5f5f5'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0.75rem;
`;

const Tag = styled.span`
  background: #4f46e5;
  color: white;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.75rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tech = styled.span`
  background: #e5e7eb;
  color: #4b5563;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.75rem;
`;

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
