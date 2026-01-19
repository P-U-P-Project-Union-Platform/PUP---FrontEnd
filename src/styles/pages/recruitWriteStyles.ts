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
  max-width: 900px;
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

export const Required = styled.span`
  color: ${theme.colors.error};
  margin-left: ${theme.spacing.xs};
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
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
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

export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const PositionItem = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const PositionInput = styled(Input)`
  flex: 2;
`;

export const CountInput = styled(Input)`
  flex: 1;
  max-width: 150px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const RemoveButton = styled.button`
  padding: ${theme.spacing.md};
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textSecondary};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.error};
    color: ${theme.colors.textWhite};
  }
`;

export const AddButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textPrimary};
  border: 1px dashed ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryLight};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
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

export const SubmitButton = styled.button`
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

export const ErrorMessage = styled.p`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing.xs};
`;

export const HelpText = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
  margin-top: ${theme.spacing.xs};
`;
