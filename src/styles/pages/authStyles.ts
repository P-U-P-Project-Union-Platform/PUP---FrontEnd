import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  max-width: 600px;
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

export const FormCard = styled.div`
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

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.md};
  color: var(--color-text-primary);
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  background-color: var(--color-bg-dark);
  color: var(--color-text-white);
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: background ${theme.transitions.base};

  &:hover {
    background-color: var(--color-bg-dark-hover);
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-bg-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 24px;
  height: 24px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.xl} 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }
`;

export const DividerText = styled.span`
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.sm};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};
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
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  background-color: var(--color-primary);
  color: var(--color-text-white);
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: background ${theme.transitions.base};
  margin-top: ${theme.spacing.md};

  &:hover {
    background-color: var(--color-primary-hover);
  }

  &:disabled {
    background: var(--color-bg-gray);
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
`;

export const LinkText = styled.p`
  margin-top: ${theme.spacing.lg};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};

  &:hover {
    text-decoration: underline;
  }
`;
