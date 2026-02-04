import styled from 'styled-components';
import { theme } from '../../theme';

export const AdminLayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--color-bg-base);
`;

export const Sidebar = styled.aside`
  width: 250px;
  background: var(--color-bg-white);
  border-right: 1px solid var(--color-border);
  padding: ${theme.spacing.xl};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 100;

  @media (max-width: ${theme.breakpoints.tablet}) {
    transform: translateX(-100%);
    transition: transform ${theme.transitions.base};
    box-shadow: ${theme.shadows.lg};

    &.open {
      transform: translateX(0);
    }
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid var(--color-border);
`;

export const SidebarTitle = styled.h1`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${props => props.active ? '600' : '500'};
  color: ${props => props.active ? theme.colors.primary : 'var(--color-text-primary)'};
  background: ${props => props.active ? 'rgba(59, 130, 246, 0.1)' : 'transparent'};
  text-decoration: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${props => props.active ? 'rgba(59, 130, 246, 0.15)' : 'var(--color-bg-light)'};
  }
`;

export const NavIcon = styled.span`
  font-size: ${theme.fontSizes.xl};
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: 0;
  }
`;

export const AdminHeader = styled.header`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: var(--shadow-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${theme.fontSizes['2xl']};
  color: var(--color-text-primary);
  cursor: pointer;
  padding: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;
