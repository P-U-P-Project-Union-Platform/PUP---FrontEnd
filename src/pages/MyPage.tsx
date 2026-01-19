import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { projectService } from '../services/projectService';
import type { Project } from '../types/project';
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
  EmptyState,
} from '../styles/pages/myPageStyles';

// Post 타입은 아직 서비스가 없으므로 임시로 유지합니다.
interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  likes: number;
}

const tabs = ['내 프로젝트', '참여 프로젝트', '내 게시글', '스크랩'];

// '내 게시글'은 아직 별도의 서비스가 없으므로 임시 데이터를 유지합니다.
const myPosts: Post[] = [
  {
    id: 1,
    title: '프로젝트 협업 시 커뮤니케이션 팁',
    description:
      '프로젝트를 진행하면서 팀원들과의 원활한 소통이 정말 중요하다는 걸 느꼈어요...',
    date: '2024-01-18',
    likes: 45,
  },
  {
    id: 2,
    title: '사이드 프로젝트로 첫 수익 달성',
    description:
      '3개월간 진행했던 사이드 프로젝트에서 드디어 첫 수익이 발생했습니다!',
    date: '2024-01-12',
    likes: 89,
  },
];

export default function MyPage() {
  const navigate = useNavigate();
  const { userProfile } = useApp();
  const [activeTab, setActiveTab] = useState('내 프로젝트');

  // --- 데이터 흐름 수정 ---
  // 1. 가상의 현재 로그인 사용자 ID
  const currentUserId = '1'; // '홍길동'의 ID로 가정

  // 2. projectService에서 모든 프로젝트를 가져와 메모이제이션
  const allProjects = useMemo(() => projectService.getAll(), []);

  // 3. '내 프로젝트' 필터링
  const myProjects = useMemo(
    () => allProjects.filter((p) => p.author.id === currentUserId),
    [allProjects, currentUserId]
  );

  // 4. '참여 프로젝트' 필터링 (현재 데이터 모델로는 구분 불가, 구조만 준비)
  // TODO: Project 모델에 'participants' 필드 추가 후 로직 구현 필요
  const participatingProjects: Project[] = [];
  // --- 수정 완료 ---

  const renderContent = () => {
    switch (activeTab) {
      case '내 프로젝트':
        return myProjects.length > 0 ? (
          <ContentGrid>
            {myProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardFooter>
                  <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  {/* API에 status가 있다면 project.status로 변경 */}
                  <span>진행중</span>
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
            {participatingProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardFooter>
                  <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  <span>진행중</span>
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
            {myPosts.map((post) => (
              <Card
                key={post.id}
                onClick={() => navigate(`/community/${post.id}`)}
              >
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
            <EditButton onClick={() => navigate('/mypage/edit')}>
              프로필 수정
            </EditButton>
          </ProfileHeader>

          <StatsGrid>
            <StatItem>
              <StatValue>{myProjects.length}</StatValue>
              <StatLabel>내 프로젝트</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>{participatingProjects.length}</StatValue>
              <StatLabel>참여 프로젝트</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>{myPosts.length}</StatValue>
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
            {tabs.map((tab) => (
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