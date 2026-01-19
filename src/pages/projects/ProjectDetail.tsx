import { useParams } from 'react-router-dom';
import { projectService } from '../../services/projectService';
import { PROJECT_CATEGORIES } from '../../types/project';
import {
  Container,
  Content,
  Thumbnail,
  ThumbnailImage,
  DetailContent,
  BackLink,
  CategoryBadge,
  Title,
  MetaInfo,
  MetaItem,
  Section,
  SectionLabel,
  Description,
  TagList,
  Tag,
  TechStack,
  Tech,
  GithubLink,
  NotFound,
  NotFoundIcon,
  NotFoundText,
  NotFoundLink,
} from '../../styles/pages/projects/detailStyles';

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
