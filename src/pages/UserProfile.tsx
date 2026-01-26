import { useParams, useNavigate } from 'react-router-dom';
import { getUserProfile } from '../mocks';
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
  EmptyState,
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoLink
} from '../styles/pages/userProfileStyles';

export default function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  const user = username ? getUserProfile(decodeURIComponent(username)) : null;

  if (!user) {
    return (
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          ← 돌아가기
        </BackButton>
        <EmptyState>사용자를 찾을 수 없습니다.</EmptyState>
      </Container>
    );
  }

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
            <InfoList>
              {user.email && (
                <InfoItem>
                  <InfoLabel>📧 이메일</InfoLabel>
                  <InfoValue>{user.email}</InfoValue>
                </InfoItem>
              )}
              {user.github && (
                <InfoItem>
                  <InfoLabel>💻 GitHub</InfoLabel>
                  <InfoLink href={user.github} target="_blank" rel="noopener noreferrer">
                    GitHub 프로필 보기
                  </InfoLink>
                </InfoItem>
              )}
              {user.blog && (
                <InfoItem>
                  <InfoLabel>📝 블로그</InfoLabel>
                  <InfoLink href={user.blog} target="_blank" rel="noopener noreferrer">
                    블로그 방문하기
                  </InfoLink>
                </InfoItem>
              )}
              {user.portfolio && (
                <InfoItem>
                  <InfoLabel>🎨 포트폴리오</InfoLabel>
                  <InfoLink href={user.portfolio} target="_blank" rel="noopener noreferrer">
                    포트폴리오 보기
                  </InfoLink>
                </InfoItem>
              )}
            </InfoList>
          </ProfileInfo>
        </ProfileHeader>

        <StatsGrid>
          <StatCard>
            <StatValue>{user.stats.projects}</StatValue>
            <StatLabel>프로젝트</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.stats.posts}</StatValue>
            <StatLabel>게시글</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.stats.likes}</StatValue>
            <StatLabel>좋아요</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{user.stats.followers}</StatValue>
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
