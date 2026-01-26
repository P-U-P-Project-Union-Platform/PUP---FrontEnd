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
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
`;

export const Form = styled.form`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  box-shadow: var(--shadow-md);

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
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.md};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  background: var(--color-bg-white);
  outline: none;
  transition: border-color ${theme.transitions.base};

  &:focus {
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }

  &:disabled {
    background: var(--color-bg-gray);
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  background: var(--color-bg-white);
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color ${theme.transitions.base};

  &:focus {
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
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
  background: linear-gradient(135deg, var(--color-primary), #764ba2);
  color: var(--color-text-white);
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
  background: var(--color-bg-gray);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-border-light);
  }
`;

export const HelpText = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-tertiary);
  margin-top: ${theme.spacing.xs};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${theme.spacing['2xl']};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid var(--color-border-light);

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: var(--color-bg-gray);
  color: var(--color-text-primary);
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-border-light);
  }
`;

export const SaveButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-primary-hover);
  }

  &:disabled {
    background: var(--color-bg-gray);
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
`;
