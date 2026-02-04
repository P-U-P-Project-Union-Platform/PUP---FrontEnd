import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {projectService} from '../../services/projectService';
import {PROJECT_CATEGORIES} from '../../types/project';
import {useApp} from '../../contexts/AppContext';
import {
    Container,
    Content,
    Thumbnail,
    ThumbnailImage,
    DetailContent,
    ActionButtons,
    EditButton,
    DeleteButton,
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
    RecruitSection,
    RecruitHeader,
    RecruitTitle,
    RecruitStatus,
    PositionList,
    PositionItem,
    PositionName,
    PositionCount,
    ApplyButton,
    AuthorSection,
    AuthorHeader,
    AuthorAvatar,
    AuthorInfo,
    AuthorName,
    AuthorBio,
    AuthorLinks,
    AuthorLink,
    NotFound,
    NotFoundIcon,
    NotFoundText,
    NotFoundLink,
} from '../../styles/pages/projects/detailStyles';

// 지원 현황 추적 (실제로는 백엔드에서 관리)
const applicationStatus: { [key: string]: { [key: string]: number } } = {
    '1': {
        '프론트엔드 개발자': 1,
        'AI 엔지니어': 0,
        'UI/UX 디자이너': 1
    },
    '2': {
        '백엔드 개발자': 0,
        '모바일 개발자': 1
    }
};

export default function ProjectDetail() {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {users, isLoggedIn, userProfile} = useApp();
    const project = id ? projectService.getById(id) : null;

    // users는 이제 email 기반이므로 이름으로 찾기
    const authorProfile = project ? Object.values(users).find(u => u.name === project.author.name) : null;

    const [hasApplied, setHasApplied] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

    // 작성자 확인
    const isAuthor = userProfile?.name === project?.author.name;

    // 프로젝트 positions를 모집 정보로 변환
    const recruitPositions = project?.positions?.map(pos => ({
        name: pos.name,
        current: id && applicationStatus[id] ? (applicationStatus[id][pos.name] || 0) : 0,
        total: parseInt(pos.count) || 0
    })) || [];

    const isRecruiting = project?.status === 'recruiting' && recruitPositions.some(pos => pos.current < pos.total);

    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/projects');
    };

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

    const handlePositionClick = (index: number, position: any) => {
        if (position.current >= position.total) {
            alert('이미 모집이 완료된 포지션입니다.');
            return;
        }
        setSelectedPosition(index === selectedPosition ? null : index);
    };

    const handleApply = () => {
        // 로그인 체크
        if (!isLoggedIn) {
            const confirmed = window.confirm('로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?');
            if (confirmed) {
                navigate('/login');
            }
            return;
        }

        if (hasApplied) {
            alert('이미 지원하셨습니다!');
            return;
        }

        if (selectedPosition === null) {
            alert('지원할 포지션을 선택해주세요!');
            return;
        }

        const position = recruitPositions[selectedPosition];
        const confirmed = window.confirm(`${position.name} 포지션에 지원하시겠습니까?`);
        if (confirmed) {
            // 실제로는 API 호출
            console.log('프로젝트 지원:', id, '포지션:', position.name);
            setHasApplied(true);
            alert('지원이 완료되었습니다! 프로젝트 담당자가 연락드릴 예정입니다.');
        }
    };

    const handleEdit = () => {
        // TODO: 수정 페이지로 이동
        alert('수정 기능은 준비 중입니다.');
    };

    const handleDelete = () => {
        const confirmed = window.confirm('정말로 이 프로젝트를 삭제하시겠습니까?');
        if (confirmed) {
            // TODO: 실제로는 API 호출하여 서버에서 삭제
            alert('프로젝트가 삭제되었습니다.');
            navigate('/projects');
        }
    };

    return (
        <Container>
            <Content>
                <Thumbnail $hasImage={!!project.thumbnail}>
                    {project.thumbnail ? (
                        <ThumbnailImage src={project.thumbnail} alt={project.title}/>
                    ) : (
                        <span>{category?.icon || '📦'}</span>
                    )}
                </Thumbnail>

                <DetailContent>
                    {isAuthor && (
                        <ActionButtons>
                            <EditButton onClick={handleEdit}>수정</EditButton>
                            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                        </ActionButtons>
                    )}
                    <BackLink to="/projects" onClick={handleBackClick}>← 목록으로</BackLink>

                    <CategoryBadge>
                        {category?.icon} {category?.label}
                    </CategoryBadge>

                    <Title>{project.title}</Title>

                    <MetaInfo>
                        <MetaItem>
                            {createdDate}
                        </MetaItem>
                        <MetaItem>
                            {project.views}회 조회
                        </MetaItem>
                        <MetaItem>
                            ❤️ {project.likes}개 좋아요
                        </MetaItem>
                    </MetaInfo>

                    <Section>
                        <SectionLabel>프로젝트 설명</SectionLabel>
                        <Description>{project.description}</Description>
                    </Section>

                    {authorProfile && (
                        <AuthorSection style={{ marginBottom: '2.5rem' }}>
                            <SectionLabel>프로젝트 작성자</SectionLabel>
                            <AuthorHeader>
                                <AuthorAvatar
                                    onClick={() => navigate(`/user/${encodeURIComponent(authorProfile.username)}`)}
                                    style={authorProfile.avatar ? {
                                        background: `url(${authorProfile.avatar}) center/cover`,
                                        fontSize: 0
                                    } : {}}
                                >
                                    {!authorProfile.avatar && authorProfile.initial}
                                </AuthorAvatar>
                                <AuthorInfo>
                                    <AuthorName>{authorProfile.name}</AuthorName>
                                    <AuthorBio>{authorProfile.bio}</AuthorBio>
                                    <AuthorLinks>
                                        {authorProfile.github && (
                                            <AuthorLink
                                                href={authorProfile.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                💻 GitHub
                                            </AuthorLink>
                                        )}
                                        {authorProfile.blog && (
                                            <AuthorLink
                                                href={authorProfile.blog}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                📝 블로그
                                            </AuthorLink>
                                        )}
                                        {authorProfile.portfolio && (
                                            <AuthorLink
                                                href={authorProfile.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                🎨 포트폴리오
                                            </AuthorLink>
                                        )}
                                    </AuthorLinks>
                                </AuthorInfo>
                            </AuthorHeader>
                        </AuthorSection>
                    )}

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

                    {recruitPositions.length > 0 && (
                        <RecruitSection>
                            <RecruitHeader>
                                <RecruitTitle>👥 팀원 모집</RecruitTitle>
                                <RecruitStatus isOpen={isRecruiting}>
                                    {isRecruiting ? '모집중' : '모집완료'}
                                </RecruitStatus>
                            </RecruitHeader>

                            <PositionList>
                                {recruitPositions.map((position: any, index: number) => {
                                    const isSelected = selectedPosition === index;
                                    const isFull = position.current >= position.total;
                                    return (
                                        <PositionItem
                                            key={index}
                                            selected={isSelected}
                                            onClick={() => handlePositionClick(index, position)}
                                            style={{
                                                cursor: isFull ? 'not-allowed' : 'pointer',
                                                opacity: isFull ? 0.6 : 1
                                            }}
                                        >
                                            <PositionName selected={isSelected}>
                                                {position.name}
                                                {isFull && ' (마감)'}
                                            </PositionName>
                                            <PositionCount selected={isSelected}>
                                                {position.current}/{position.total}
                                            </PositionCount>
                                        </PositionItem>
                                    );
                                })}
                            </PositionList>

                            <ApplyButton
                                onClick={handleApply}
                                disabled={!isRecruiting || hasApplied || selectedPosition === null}
                            >
                                {hasApplied
                                    ? '지원 완료'
                                    : selectedPosition === null
                                        ? '포지션을 선택해주세요'
                                        : isRecruiting
                                            ? '지원하기'
                                            : '모집 마감'}
                            </ApplyButton>
                        </RecruitSection>
                    )}
                </DetailContent>
            </Content>
        </Container>
    );
}