import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

// 임시 데이터
const mockPost = {
  id: 1,
  title: '프로젝트 협업 시 커뮤니케이션 팁 공유합니다',
  content: `프로젝트를 진행하면서 팀원들과의 원활한 소통이 정말 중요하다는 걸 느꼈어요.
제가 사용했던 방법들을 공유해드립니다.

## 1. 데일리 스탠드업 미팅
매일 아침 15분 정도 간단한 미팅을 진행했어요. 각자 어제 한 일, 오늘 할 일, 그리고 어려운 점을 공유했습니다.

## 2. 문서화
노션을 활용해서 프로젝트 진행 상황과 회의록을 꼼꼼히 기록했어요. 나중에 참고하기도 좋고, 새로운 팀원이 합류했을 때도 도움이 됩니다.

## 3. 적극적인 피드백
서로의 코드에 대해 적극적으로 리뷰하고 피드백을 주고받았어요. 처음엔 부담스러울 수 있지만, 결과적으로 코드 품질이 많이 향상되었습니다.

이런 방법들을 통해 프로젝트를 성공적으로 마무리할 수 있었습니다!`,
  category: '정보',
  author: '김개발',
  authorInitial: '김',
  date: '2024-01-18',
  views: 152,
  likes: 45
};

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
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(mockPost.likes);
  const [comments, setComments] = useState<CommentType[]>(mockComments);
  const [newComment, setNewComment] = useState('');

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
            <CategoryBadge>{mockPost.category}</CategoryBadge>
            <Title>{mockPost.title}</Title>
            <Meta>
              <AuthorInfo>
                <Avatar>{mockPost.authorInitial}</Avatar>
                <AuthorDetails>
                  <AuthorName>{mockPost.author}</AuthorName>
                  <PostDate>{mockPost.date}</PostDate>
                </AuthorDetails>
              </AuthorInfo>
              <Stats>
                <Stat>👁 {mockPost.views}</Stat>
                <Stat>💬 {comments.length}</Stat>
                <Stat>❤️ {likeCount}</Stat>
              </Stats>
            </Meta>
          </Header>

          <Content>{mockPost.content}</Content>

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
