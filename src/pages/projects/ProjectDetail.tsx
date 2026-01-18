import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projectService } from '../../services/projectService';
import { PROJECT_CATEGORIES } from '../../types/project';

const Container = styled.div`
  background: #f9f9f9;
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: 768px) {
    padding: 80px 20px 40px;
  }
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.$hasImage
      ? '#f5f5f5'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;

  @media (max-width: 768px) {
    height: 250px;
    font-size: 80px;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailContent = styled.div`
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #4f46e5;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: #4338ca;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-wrap;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background: #4f46e5;
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tech = styled.span`
  background: #e5e7eb;
  color: #4b5563;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const GithubLink = styled.a`
  display: inline-block;
  background: #1a1a1a;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const NotFoundIcon = styled.div`
  font-size: 80px;
  margin-bottom: 1.5rem;
`;

const NotFoundText = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
`;

const NotFoundLink = styled(Link)`
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectService.getById(id) : null;

  if (!project) {
    return (
      <Container>
        <NotFound>
          <NotFoundIcon>❓</NotFoundIcon>
          <NotFoundText>프로젝트를 찾을 수 없습니다</NotFoundText>
          <NotFoundLink to="/projects">목록으로 돌아가기</NotFoundLink>
        </NotFound>
      </Container>
    );
  }

  const category = PROJECT_CATEGORIES.find((c) => c.id === project.category);
  const createdDate = new Date(project.createdAt).toLocaleDateString('ko-KR');

  return (
    <Container>
      <Content>
        <Thumbnail $hasImage={!!project.thumbnail}>
          {project.thumbnail ? (
            <ThumbnailImage src={project.thumbnail} alt={project.title} />
          ) : (
            <span>{category?.icon || '📦'}</span>
          )}
        </Thumbnail>

        <DetailContent>
          <BackLink to="/projects">← 목록으로</BackLink>

          <CategoryBadge>
            {category?.icon} {category?.label}
          </CategoryBadge>

          <Title>{project.title}</Title>

          <MetaInfo>
            <MetaItem>
              👤 {project.author.name}
            </MetaItem>
            <MetaItem>
              📅 {createdDate}
            </MetaItem>
            <MetaItem>
              👁 {project.views}회 조회
            </MetaItem>
            <MetaItem>
              ❤️ {project.likes}개 좋아요
            </MetaItem>
          </MetaInfo>

          <Section>
            <SectionLabel>프로젝트 설명</SectionLabel>
            <Description>{project.description}</Description>
          </Section>

          {project.tags.length > 0 && (
            <Section>
              <SectionLabel>해시태그</SectionLabel>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </Section>
          )}

          <Section>
            <SectionLabel>기술 스택</SectionLabel>
            <TechStack>
              {project.techStack.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </TechStack>
          </Section>

          {project.github && (
            <Section>
              <SectionLabel>GitHub 저장소</SectionLabel>
              <GithubLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                📦 GitHub에서 보기
              </GithubLink>
            </Section>
          )}
        </DetailContent>
      </Content>
    </Container>
  );
}
