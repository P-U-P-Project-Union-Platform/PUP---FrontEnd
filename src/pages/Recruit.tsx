import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
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

export default function Recruit() {
  const navigate = useNavigate();
  const { recruits } = useApp();
  const [filter, setFilter] = useState<'all' | 'recruiting' | 'closed'>('all');

  const filteredRecruits = recruits.filter(recruit => {
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
                      {position.count}명
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
