import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import {
  Container,
  ContentWrapper,
  BackButton,
  Article,
  Header,
  CategoryBadge,
  Title,
  Meta,
  AuthorInfo,
  Avatar,
  AuthorDetails,
  AuthorName,
  PostDate,
  Stats,
  Stat,
  Content,
  ActionBar,
  LikeButton,
  CommentSection,
  CommentHeader,
  CommentForm,
  CommentTextarea,
  CommentSubmitButton,
  CommentList,
  Comment,
  CommentAuthor,
  CommentAvatar,
  CommentAuthorName,
  CommentDate,
  CommentContent,
  EmptyComments
} from '../styles/pages/communityDetailStyles';

interface CommentType {
  id: number;
  author: string;
  authorInitial: string;
  content: string;
  date: string;
}

const mockComments: CommentType[] = [
  {
    id: 1,
    author: '이코더',
    authorInitial: '이',
    content: '정말 유용한 팁이네요! 저희 팀에도 적용해봐야겠어요.',
    date: '2024-01-18 14:30'
  },
  {
    id: 2,
    author: '박프론트',
    authorInitial: '박',
    content: '데일리 스탠드업은 정말 효과적이죠. 저희도 매일 하고 있는데 팀 분위기가 훨씬 좋아졌어요.',
    date: '2024-01-18 15:20'
  }
];

export default function CommunityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { communityPosts } = useApp();

  const post = communityPosts.find(p => p.id === Number(id));

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes || 0);
  const [comments, setComments] = useState<CommentType[]>(mockComments);
  const [newComment, setNewComment] = useState('');

  if (!post) {
    return (
      <Container>
        <ContentWrapper>
          <BackButton onClick={() => navigate('/community')}>
            ← 목록으로
          </BackButton>
          <EmptyComments>게시글을 찾을 수 없습니다.</EmptyComments>
        </ContentWrapper>
      </Container>
    );
  }

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim()) {
      return;
    }

    const comment: CommentType = {
      id: comments.length + 1,
      author: '나',
      authorInitial: '나',
      content: newComment,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <Container>
      <ContentWrapper>
        <BackButton onClick={() => navigate('/community')}>
          ← 목록으로
        </BackButton>

        <Article>
          <Header>
            <CategoryBadge>{post.category}</CategoryBadge>
            <Title>{post.title}</Title>
            <Meta>
              <AuthorInfo>
                <Avatar>{post.authorInitial}</Avatar>
                <AuthorDetails>
                  <AuthorName>{post.author}</AuthorName>
                  <PostDate>{post.date}</PostDate>
                </AuthorDetails>
              </AuthorInfo>
              <Stats>
                <Stat>👁 {post.views}</Stat>
                <Stat>💬 {comments.length}</Stat>
                <Stat>❤️ {likeCount}</Stat>
              </Stats>
            </Meta>
          </Header>

          <Content>{post.content}</Content>

          <ActionBar>
            <LikeButton liked={liked} onClick={handleLike}>
              ❤️ 좋아요 {likeCount}
            </LikeButton>
          </ActionBar>
        </Article>

        <CommentSection>
          <CommentHeader>댓글 {comments.length}개</CommentHeader>

          <CommentForm onSubmit={handleCommentSubmit}>
            <CommentTextarea
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <CommentSubmitButton type="submit">
              댓글 작성
            </CommentSubmitButton>
          </CommentForm>

          {comments.length > 0 ? (
            <CommentList>
              {comments.map(comment => (
                <Comment key={comment.id}>
                  <CommentAuthor>
                    <CommentAvatar>{comment.authorInitial}</CommentAvatar>
                    <CommentAuthorName>{comment.author}</CommentAuthorName>
                    <CommentDate>{comment.date}</CommentDate>
                  </CommentAuthor>
                  <CommentContent>{comment.content}</CommentContent>
                </Comment>
              ))}
            </CommentList>
          ) : (
            <EmptyComments>첫 댓글을 작성해보세요!</EmptyComments>
          )}
        </CommentSection>
      </ContentWrapper>
    </Container>
  );
}
