import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  margin-bottom: ${theme.spacing.lg};
  transition: all ${theme.transitions.base};
  border-radius: ${theme.borderRadius.md};

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-gray);
  }
`;

export const Article = styled.article`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']};
  }
`;

export const Header = styled.div`
  padding-bottom: ${theme.spacing.xl};
  border-bottom: 1px solid var(--color-border);
  margin-bottom: ${theme.spacing.xl};
  position: relative;
`;

export const ActionButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const EditButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: var(--color-bg-gray);
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  color: var(--color-text-secondary);
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-border);
    color: var(--color-text-primary);
  }
`;

export const DeleteButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: transparent;
  border: 1px solid var(--color-error);
  border-radius: ${theme.borderRadius.md};
  color: var(--color-error);
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-error);
    color: white;
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.full};
  background: var(--gradient-blue);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.lg};
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const AuthorName = styled.span`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
`;

export const PostDate = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-tertiary);
`;

export const Stats = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-tertiary);
`;

export const Content = styled.div`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;

  p {
    margin-bottom: ${theme.spacing.md};
  }

  img {
    max-width: 100%;
    border-radius: ${theme.borderRadius.md};
    margin: ${theme.spacing.lg} 0;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid var(--color-border);
  margin-top: ${theme.spacing.xl};
`;

export const LikeButton = styled.button<{ liked?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${props => props.liked ? 'var(--gradient-pink)' : 'var(--color-bg-gray)'};
  color: ${props => props.liked ? 'var(--color-text-white)' : 'var(--color-text-secondary)'};
  border: ${props => props.liked ? 'none' : '2px solid var(--color-border)'};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: ${props => props.liked ? 'var(--shadow-md)' : 'var(--shadow-sm)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.liked ? 'var(--shadow-lg)' : 'var(--shadow-md)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CommentSection = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']};
  }
`;

export const CommentHeader = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xl};
`;

export const CommentForm = styled.form`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${theme.spacing.lg};
  border: 2px solid var(--color-border);
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  background: var(--color-bg-white);
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: all ${theme.transitions.base};
  margin-bottom: ${theme.spacing.md};

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-light);
  }

  &:hover {
    border-color: var(--color-border-dark-hover);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

export const CommentSubmitButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: var(--gradient-blue);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: var(--shadow-md);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const Comment = styled.div`
  padding: ${theme.spacing.xl};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid var(--color-border);
  transition: all ${theme.transitions.base};

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const CommentAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.full};
  background: var(--gradient-purple);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-md);
  }
`;

export const CommentAuthorName = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
`;

export const CommentDate = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: var(--color-text-tertiary);
  margin-left: auto;
`;

export const CommentContent = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  line-height: 1.6;
`;

export const EmptyComments = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']};
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.base};
`;
