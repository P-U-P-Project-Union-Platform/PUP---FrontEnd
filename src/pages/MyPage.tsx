import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import {
  Container,
  MaxWidthWrapper,
  ProfileSection,
  ProfileHeader,
  Avatar,
  ProfileInfo,
  Name,
  Email,
  Bio,
  EditButton,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel,
  TabSection,
  TabList,
  Tab,
  ContentGrid,
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  EmptyState
} from '../styles/pages/myPageStyles';

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  likes: number;
}

const tabs = ['내 프로젝트', '참여 프로젝트', '내 게시글', '스크랩'];

// 임시 데이터
const myProjects: Project[] = [
  {
    id: 1,
    title: 'AI 기반 학습 플랫폼',
    description: '개인 맞춤형 학습 경로를 제공하는 AI 플랫폼입니다.',
    date: '2024-01-10',
    status: '진행중'
  },
  {
    id: 2,
    title: '친환경 배달 서비스',
    description: '탄소 배출을 줄이는 친환경 배달 플랫폼입니다.',
    date: '2023-12-15',
    status: '완료'
  }
];

const participatingProjects: Project[] = [
  {
    id: 3,
    title: '소상공인 재고관리 시스템',
    description: '소규모 상점을 위한 간편한 재고 관리 솔루션입니다.',
    date: '2024-01-05',
    status: '진행중'
  }
];

const myPosts: Post[] = [
  {
    id: 1,
    title: '프로젝트 협업 시 커뮤니케이션 팁',
    description: '프로젝트를 진행하면서 팀원들과의 원활한 소통이 정말 중요하다는 걸 느꼈어요...',
    date: '2024-01-18',
    likes: 45
  },
  {
    id: 2,
    title: '사이드 프로젝트로 첫 수익 달성',
    description: '3개월간 진행했던 사이드 프로젝트에서 드디어 첫 수익이 발생했습니다!',
    date: '2024-01-12',
    likes: 89
  }
];

export default function MyPage() {
  const navigate = useNavigate();
  const { userProfile } = useApp();
  const [activeTab, setActiveTab] = useState('내 프로젝트');

  const renderContent = () => {
    switch (activeTab) {
      case '내 프로젝트':
        return myProjects.length > 0 ? (
          <ContentGrid>
            {myProjects.map(project => (
              <Card key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardFooter>
                  <span>{project.date}</span>
                  <span>{project.status}</span>
                </CardFooter>
              </Card>
            ))}
          </ContentGrid>
        ) : (
          <EmptyState>등록한 프로젝트가 없습니다.</EmptyState>
        );

      case '참여 프로젝트':
        return participatingProjects.length > 0 ? (
          <ContentGrid>
            {participatingProjects.map(project => (
              <Card key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardFooter>
                  <span>{project.date}</span>
                  <span>{project.status}</span>
                </CardFooter>
              </Card>
            ))}
          </ContentGrid>
        ) : (
          <EmptyState>참여 중인 프로젝트가 없습니다.</EmptyState>
        );

      case '내 게시글':
        return myPosts.length > 0 ? (
          <ContentGrid>
            {myPosts.map(post => (
              <Card key={post.id} onClick={() => navigate(`/community/${post.id}`)}>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
                <CardFooter>
                  <span>{post.date}</span>
                  <span>❤️ {post.likes}</span>
                </CardFooter>
              </Card>
            ))}
          </ContentGrid>
        ) : (
          <EmptyState>작성한 게시글이 없습니다.</EmptyState>
        );

      case '스크랩':
        return <EmptyState>스크랩한 항목이 없습니다.</EmptyState>;

      default:
        return null;
    }
  };

  return (
    <Container>
      <MaxWidthWrapper>
        <ProfileSection>
          <ProfileHeader>
            <Avatar>{userProfile.name.charAt(0)}</Avatar>
            <ProfileInfo>
              <Name>{userProfile.name}</Name>
              <Email>{userProfile.email}</Email>
              <Bio>{userProfile.bio}</Bio>
            </ProfileInfo>
            <EditButton onClick={() => navigate('/mypage/edit')}>프로필 수정</EditButton>
          </ProfileHeader>

          <StatsGrid>
            <StatItem>
              <StatValue>12</StatValue>
              <StatLabel>내 프로젝트</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>5</StatValue>
              <StatLabel>참여 프로젝트</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>34</StatValue>
              <StatLabel>게시글</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>89</StatValue>
              <StatLabel>받은 좋아요</StatLabel>
            </StatItem>
          </StatsGrid>
        </ProfileSection>

        <TabSection>
          <TabList>
            {tabs.map(tab => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          {renderContent()}
        </TabSection>
      </MaxWidthWrapper>
    </Container>
  );
}
