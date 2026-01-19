import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const Label = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const UploadArea = styled.div<{ isDragging: boolean }>`
  border: 2px dashed
    ${(props) => (props.isDragging ? theme.colors.primary : theme.colors.border)};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  background: ${(props) =>
    props.isDragging ? theme.colors.primaryLight : theme.colors.bgWhite};

  &:hover {
    border-color: ${theme.colors.primary};
    background: #f9f9ff;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${theme.spacing.md};
`;

export const UploadText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.base};
  margin: ${theme.spacing.sm} 0;
`;

export const UploadHint = styled.p`
  color: ${theme.colors.textTertiary};
  font-size: ${theme.fontSizes.sm};
  margin: ${theme.spacing.xs} 0;
`;

export const PreviewContainer = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  background: ${theme.colors.bgGray};
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: rgba(0, 0, 0, 0.7);
  color: ${theme.colors.textWhite};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: ${theme.fontSizes.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background ${theme.transitions.base};

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing.sm};
`;

export const HiddenInput = styled.input`
  display: none;
`;
