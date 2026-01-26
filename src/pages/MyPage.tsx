import {useState, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useApp} from '../contexts/AppContext';
import {projectService} from '../services/projectService';
import type {Project} from '../types/project';
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

const tabs = ['내 프로젝트', '참여 프로젝트', '내 게시글', '스크랩'];

export default function MyPage() {
    const navigate = useNavigate();
    const {userProfile, communityPosts} = useApp(); // communityPosts 추가
    const [activeTab, setActiveTab] = useState('내 프로젝트');

    const currentUserId = '1';

    const allProjects = useMemo(() => projectService.getAll(), []);

    const myProjects = useMemo(
        () => allProjects.filter((p) => p.author.id === currentUserId),
        [allProjects, currentUserId]
    );

    const participatingProjects: Project[] = [];

    const myFilteredPosts = useMemo(
        () => communityPosts.filter((post) => post.author === userProfile.name),
        [communityPosts, userProfile.name]
    );

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
                return myFilteredPosts.length > 0 ? (
                    <ContentGrid>
                        {myFilteredPosts.map((post) => (
                            <Card
                                key={post.id}
                                onClick={() => navigate(`/community/${post.id}`)}
                            >
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.content}</CardDescription>
                                <CardFooter>
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
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
                        <Avatar style={userProfile.avatar ? {
                            background: `url(${userProfile.avatar}) center/cover`,
                            fontSize: 0
                        } : {}}>
                            {!userProfile.avatar && userProfile.initial}
                        </Avatar>
                        <ProfileInfo>
                            <Name>{userProfile.name}</Name>
                            <Email>{userProfile.email || 'email@example.com'}</Email>
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
                            <StatValue>{myFilteredPosts.length}</StatValue>
                            <StatLabel>게시글</StatLabel>
                        </StatItem>
                        <StatItem>
                            <StatValue>{userProfile.stats.likes}</StatValue>
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