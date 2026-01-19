import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  TitleSection,
  Title,
  Description,
  WriteButton,
  FilterSection,
  FilterButton,
  RecruitGrid,
  RecruitCard,
  CardHeader,
  ProjectTitle,
  Status,
  ProjectDescription,
  PositionList,
  PositionItem,
  PositionName,
  PositionCount,
  TagList,
  Tag,
  CardFooter,
  Author,
  Date,
  EmptyState
} from '../styles/pages/recruitStyles';

interface Position {
  name: string;
  current: number;
  total: number;
}

interface RecruitPost {
  id: number;
  projectTitle: string;
  description: string;
  positions: Position[];
  tags: string[];
  author: string;
  date: string;
  status: 'recruiting' | 'closed';
}

// 임시 데이터
const mockRecruits: RecruitPost[] = [
  {
    id: 1,
    projectTitle: 'AI 기반 학습 플랫폼 개발',
    description: 'AI를 활용한 맞춤형 학습 플랫폼을 개발하고 있습니다. 교육과 기술의 융합에 관심 있는 분들을 찾습니다.',
    positions: [
      { name: '프론트엔드 개발자', current: 1, total: 2 },
      { name: 'AI 엔지니어', current: 0, total: 1 },
      { name: 'UI/UX 디자이너', current: 1, total: 1 }
    ],
    tags: ['React', 'Python', 'TensorFlow', 'Figma'],
    author: '김철수',
    date: '2024-01-15',
    status: 'recruiting'
  },
  {
    id: 2,
    projectTitle: '친환경 배달 서비스 앱',
    description: '환경을 생각하는 배달 서비스 플랫폼입니다. 지속 가능한 서비스를 함께 만들어갈 팀원을 찾습니다.',
    positions: [
      { name: '백엔드 개발자', current: 0, total: 2 },
      { name: '모바일 개발자', current: 1, total: 2 }
    ],
    tags: ['Node.js', 'React Native', 'MongoDB'],
    author: '이영희',
    date: '2024-01-14',
    status: 'recruiting'
  },
  {
    id: 3,
    projectTitle: '소상공인을 위한 재고관리 솔루션',
    description: '소규모 상점을 위한 간편한 재고관리 시스템을 개발하고 있습니다.',
    positions: [
      { name: '풀스택 개발자', current: 2, total: 2 },
      { name: 'PM', current: 1, total: 1 }
    ],
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
    author: '박민수',
    date: '2024-01-10',
    status: 'closed'
  }
];

export default function Recruit() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'recruiting' | 'closed'>('all');

  const filteredRecruits = mockRecruits.filter(recruit => {
    if (filter === 'all') return true;
    return recruit.status === filter;
  });

  return (
    <Container>
      <Header>
        <TitleSection>
          <Title>인원 모집</Title>
          <Description>
            함께 프로젝트를 만들어갈 팀원을 찾고 계신가요? 다양한 프로젝트의 팀원 모집 공고를 확인해보세요.
          </Description>
        </TitleSection>
        <WriteButton onClick={() => navigate('/recruit/write')}>
          모집 공고 작성
        </WriteButton>
      </Header>

      <FilterSection>
        <FilterButton
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          전체
        </FilterButton>
        <FilterButton
          active={filter === 'recruiting'}
          onClick={() => setFilter('recruiting')}
        >
          모집중
        </FilterButton>
        <FilterButton
          active={filter === 'closed'}
          onClick={() => setFilter('closed')}
        >
          모집완료
        </FilterButton>
      </FilterSection>

      {filteredRecruits.length === 0 ? (
        <EmptyState>모집 공고가 없습니다.</EmptyState>
      ) : (
        <RecruitGrid>
          {filteredRecruits.map(recruit => (
            <RecruitCard key={recruit.id} onClick={() => navigate(`/projects/${recruit.id}`)}>
              <CardHeader>
                <ProjectTitle>{recruit.projectTitle}</ProjectTitle>
                <Status status={recruit.status}>
                  {recruit.status === 'recruiting' ? '모집중' : '모집완료'}
                </Status>
              </CardHeader>

              <ProjectDescription>{recruit.description}</ProjectDescription>

              <PositionList>
                {recruit.positions.map((position, index) => (
                  <PositionItem key={index}>
                    <PositionName>{position.name}</PositionName>
                    <PositionCount>
                      {position.current}/{position.total}
                    </PositionCount>
                  </PositionItem>
                ))}
              </PositionList>

              <TagList>
                {recruit.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>

              <CardFooter>
                <Author>{recruit.author}</Author>
                <Date>{recruit.date}</Date>
              </CardFooter>
            </RecruitCard>
          ))}
        </RecruitGrid>
      )}
    </Container>
  );
}
