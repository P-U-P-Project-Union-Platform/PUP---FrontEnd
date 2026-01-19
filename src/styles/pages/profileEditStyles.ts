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

export const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textSecondary};
`;

export const Form = styled.form`
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
  }
`;

export const Section = styled.div`
  margin-bottom: ${theme.spacing['2xl']};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.md};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textPrimary};
  outline: none;
  transition: border-color ${theme.transitions.base};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textTertiary};
  }

  &:disabled {
    background: ${theme.colors.bgGray};
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textPrimary};
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color ${theme.transitions.base};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textTertiary};
  }
`;

export const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${theme.borderRadius.full};
  background: linear-gradient(135deg, ${theme.colors.primary}, #764ba2);
  color: ${theme.colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  flex-shrink: 0;
`;

export const AvatarInfo = styled.div`
  flex: 1;
`;

export const AvatarButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: #e0e0e0;
  }
`;

export const HelpText = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
  margin-top: ${theme.spacing.xs};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${theme.spacing['2xl']};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.borderLight};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: #e0e0e0;
  }
`;

export const SaveButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
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

  &:disabled {
    background: ${theme.colors.bgGray};
    color: ${theme.colors.textTertiary};
    cursor: not-allowed;
  }
`;
