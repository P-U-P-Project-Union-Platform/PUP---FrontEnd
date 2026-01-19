import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
`;

export const Section = styled.section`
  background: ${theme.colors.bgWhite};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.textPrimary};
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};

  width: 80%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  border: none;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.bgDark};
  color: ${theme.colors.textWhite};

  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};

  cursor: pointer;
  transition: background ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.bgDarkHover};
  }
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.bgWhite};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  width: 80%;
  margin: ${theme.spacing.lg} 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.border};
  }
`;

export const DividerText = styled.span`
  color: ${theme.colors.textTertiary};
  font-size: ${theme.fontSizes.sm};
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  outline: none;
  transition: border-color ${theme.transitions.base};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textTertiary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: background ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export const LinkText = styled.p`
  margin-top: ${theme.spacing.lg};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};

  &:hover {
    text-decoration: underline;
  }
`;
