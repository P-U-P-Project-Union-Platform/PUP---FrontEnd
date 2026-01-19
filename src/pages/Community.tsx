import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  TitleSection,
  Title,
  Description,
  WriteButton,
  CategorySection,
  CategoryButton,
  PostList,
  PostCard,
  PostHeader,
  PostTitle,
  CategoryBadge,
  PostContent,
  PostFooter,
  AuthorInfo,
  Avatar,
  AuthorDetails,
  AuthorName,
  PostDate,
  PostStats,
  Stat,
  EmptyState
} from '../styles/pages/communityStyles';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  authorInitial: string;
  date: string;
  views: number;
  comments: number;
  likes: number;
}

const categories = ['전체', '자유', '질문', '정보', '후기'];

// 임시 데이터
const mockPosts: Post[] = [
  {
    id: 1,
    title: '프로젝트 협업 시 커뮤니케이션 팁 공유합니다',
    content: '프로젝트를 진행하면서 팀원들과의 원활한 소통이 정말 중요하다는 걸 느꼈어요. 제가 사용했던 방법들을 공유해드립니다...',
    category: '정보',
    author: '김개발',
    authorInitial: '김',
    date: '2024-01-18',
    views: 152,
    comments: 23,
    likes: 45
  },
  {
    id: 2,
    title: 'React vs Vue, 어떤 걸 선택하셨나요?',
    content: '새로운 프로젝트를 시작하려고 하는데 프론트엔드 프레임워크 선택에 고민이 많습니다. 경험 있으신 분들의 조언 부탁드립니다!',
    category: '질문',
    author: '이초보',
    authorInitial: '이',
    date: '2024-01-17',
    views: 89,
    comments: 17,
    likes: 12
  },
  {
    id: 3,
    title: '사이드 프로젝트로 첫 수익 달성했어요!',
    content: '3개월간 진행했던 사이드 프로젝트에서 드디어 첫 수익이 발생했습니다! 처음에는 막막했지만 포기하지 않고 계속 개선한 결과인 것 같아요.',
    category: '후기',
    author: '박성공',
    authorInitial: '박',
    date: '2024-01-16',
    views: 234,
    comments: 41,
    likes: 89
  },
  {
    id: 4,
    title: 'Git 협업 워크플로우 추천 부탁드려요',
    content: '팀 프로젝트에서 Git을 사용하려고 하는데 어떤 브랜치 전략이 좋을까요? Git Flow, GitHub Flow 등 여러 방법이 있는데...',
    category: '질문',
    author: '최질문',
    authorInitial: '최',
    date: '2024-01-15',
    views: 67,
    comments: 9,
    likes: 15
  },
  {
    id: 5,
    title: '오늘 점심 뭐 먹을까요?',
    content: '회사 근처 맛집 추천 받습니다! 요즘 매일 같은 거만 먹어서 질렸어요 ㅠㅠ',
    category: '자유',
    author: '정잡담',
    authorInitial: '정',
    date: '2024-01-15',
    views: 43,
    comments: 12,
    likes: 8
  }
];

export default function Community() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredPosts = mockPosts.filter(post => {
    if (selectedCategory === '전체') return true;
    return post.category === selectedCategory;
  });

  return (
    <Container>
      <Header>
        <TitleSection>
          <Title>커뮤니티</Title>
          <Description>프로젝트와 개발에 대한 이야기를 자유롭게 나눠보세요</Description>
        </TitleSection>
        <WriteButton onClick={() => alert('글쓰기 기능은 준비 중입니다!')}>글쓰기</WriteButton>
      </Header>

      <CategorySection>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategorySection>

      {filteredPosts.length === 0 ? (
        <EmptyState>게시글이 없습니다.</EmptyState>
      ) : (
        <PostList>
          {filteredPosts.map(post => (
            <PostCard key={post.id} onClick={() => navigate(`/community/${post.id}`)}>
              <PostHeader>
                <PostTitle>{post.title}</PostTitle>
                <CategoryBadge>{post.category}</CategoryBadge>
              </PostHeader>

              <PostContent>{post.content}</PostContent>

              <PostFooter>
                <AuthorInfo>
                  <Avatar>{post.authorInitial}</Avatar>
                  <AuthorDetails>
                    <AuthorName>{post.author}</AuthorName>
                    <PostDate>{post.date}</PostDate>
                  </AuthorDetails>
                </AuthorInfo>

                <PostStats>
                  <Stat>👁 {post.views}</Stat>
                  <Stat>💬 {post.comments}</Stat>
                  <Stat>❤️ {post.likes}</Stat>
                </PostStats>
              </PostFooter>
            </PostCard>
          ))}
        </PostList>
      )}
    </Container>
  );
}
