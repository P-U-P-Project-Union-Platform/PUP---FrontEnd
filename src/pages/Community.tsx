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

const categories = ['전체', '자유', '질문', '정보', '후기'];

export default function Community() {
  const navigate = useNavigate();
  const { communityPosts } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredPosts = communityPosts.filter(post => {
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
        <WriteButton onClick={() => navigate('/community/write')}>글쓰기</WriteButton>
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
                  <Stat><span>👁</span> {post.views}</Stat>
                  <Stat><span>💬</span> {post.comments}</Stat>
                  <Stat><span>❤️</span> {post.likes}</Stat>
                </PostStats>
              </PostFooter>
            </PostCard>
          ))}
        </PostList>
      )}
    </Container>
  );
}
