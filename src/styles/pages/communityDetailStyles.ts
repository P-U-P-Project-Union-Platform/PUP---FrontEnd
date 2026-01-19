import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  background: ${theme.colors.bgLight};
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
  color: ${theme.colors.textSecondary};
  border: none;
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  margin-bottom: ${theme.spacing.lg};
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.textPrimary};
  }
`;

export const Article = styled.article`
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
  }
`;

export const Header = styled.div`
  padding-bottom: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.borderLight};
  margin-bottom: ${theme.spacing.xl};
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
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
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.lg};
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const AuthorName = styled.span`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
`;

export const PostDate = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
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
  color: ${theme.colors.textTertiary};
`;

export const Content = styled.div`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textPrimary};
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
  border-top: 1px solid ${theme.colors.borderLight};
  margin-top: ${theme.spacing.xl};
`;

export const LikeButton = styled.button<{ liked?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${props => props.liked ? theme.colors.primaryLight : theme.colors.bgGray};
  color: ${props => props.liked ? theme.colors.primary : theme.colors.textSecondary};
  border: 1px solid ${props => props.liked ? theme.colors.primary : theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${props => props.liked ? theme.colors.primary : theme.colors.borderLight};
    color: ${props => props.liked ? theme.colors.textWhite : theme.colors.textPrimary};
  }
`;

export const CommentSection = styled.div`
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
  }
`;

export const CommentHeader = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.lg};
`;

export const CommentForm = styled.form`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textPrimary};
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color ${theme.transitions.base};
  margin-bottom: ${theme.spacing.md};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textTertiary};
  }
`;

export const CommentSubmitButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const Comment = styled.div`
  padding: ${theme.spacing.lg};
  background: ${theme.colors.bgLight};
  border-radius: ${theme.borderRadius.md};
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
`;

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
`;

export const CommentAuthorName = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
`;

export const CommentDate = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textTertiary};
  margin-left: auto;
`;

export const CommentContent = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textPrimary};
  line-height: 1.6;
`;

export const EmptyComments = styled.div`
  text-align: center;
  padding: ${theme.spacing['2xl']};
  color: ${theme.colors.textTertiary};
  font-size: ${theme.fontSizes.base};
`;
