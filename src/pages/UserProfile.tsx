import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  ProfileSection,
  ProfileHeader,
  Avatar,
  ProfileInfo,
  UserName,
  UserBio,
  BackButton,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  ContentSection,
  SectionTitle,
  EmptyState
} from '../styles/pages/userProfileStyles';

export default function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  // 임시 사용자 데이터 (실제로는 API에서 가져와야 함)
  const user = {
    name: username || '사용자',
    initial: username?.charAt(0) || 'U',
    bio: '프로젝트와 개발을 좋아하는 개발자입니다.',
    projects: 5,
    posts: 12,
    likes: 48,
    followers: 23
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        ← 돌아가기
      </BackButton>

      <ProfileSection>
        <ProfileHeader>
          <Avatar>{user.initial}</Avatar>
          <ProfileInfo>
            <UserName>{user.name}</UserName>
            <UserBio>{user.bio}</UserBio>
          </ProfileInfo>
        </ProfileHeader>

        <StatsGrid>
          <StatCard>
            <StatValue>{user.projects}</StatValue>
            <StatLabel>프로젝트</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.posts}</StatValue>
            <StatLabel>게시글</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.likes}</StatValue>
            <StatLabel>좋아요</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.followers}</StatValue>
            <StatLabel>팔로워</StatLabel>
          </StatCard>
        </StatsGrid>
      </ProfileSection>

      <ContentSection>
        <SectionTitle>최근 활동</SectionTitle>
        <EmptyState>아직 활동 내역이 없습니다.</EmptyState>
      </ContentSection>
    </Container>
  );
}
