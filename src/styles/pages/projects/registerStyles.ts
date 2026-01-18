import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { theme } from '../../theme';

export const Container = styled.div`
  background-color: ${theme.colors.bgLight};
  min-height: 100vh;
  padding: 60px 40px;
  color: ${theme.colors.textPrimary};
`;

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.lg};
  padding: ${theme.spacing.md} 0;
  font-family: inherit;
  outline: none;

  &::placeholder {
    color: ${theme.colors.textTertiary};
    font-style: italic;
  }
`;

export const TitleInput = styled(Input)`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.xl};
`;

export const Textarea = styled(TextareaAutosize)`
  width: 100%;
  background: transparent;
  border: none;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.base};
  padding: ${theme.spacing.md} 0;
  font-family: inherit;
  outline: none;
  resize: none;
  line-height: 1.8;

  &::placeholder {
    color: ${theme.colors.textTertiary};
    font-style: italic;
  }
`;

export const Label = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  font-weight: ${theme.fontWeights.bold};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
  cursor: pointer;
  font-size: ${theme.fontSizes.base};
  margin-top: 40px;
  transition: background ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;
