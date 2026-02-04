import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import {
  AdminLayoutContainer,
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarNav,
  NavItem,
  NavIcon,
  MainContent,
  AdminHeader,
  PageTitle,
  HeaderActions,
  MobileMenuButton
} from '../../styles/components/admin/adminLayoutStyles';

const menuItems = [
  { path: '/admin', label: '대시보드', icon: '📊' },
  { path: '/admin/users', label: '사용자 관리', icon: '👥' },
  { path: '/admin/projects', label: '프로젝트 관리', icon: '📁' }
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userProfile, isDarkMode, toggleDarkMode, logout } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = () => {
    const item = menuItems.find(item => item.path === location.pathname);
    return item?.label || '관리자 페이지';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AdminLayoutContainer>
      <Sidebar className={sidebarOpen ? 'open' : ''}>
        <SidebarHeader>
          <SidebarTitle>
            ⚙️ Admin Panel
          </SidebarTitle>
        </SidebarHeader>
        <SidebarNav>
          {menuItems.map(item => (
            <NavItem
              key={item.path}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
            >
              <NavIcon>{item.icon}</NavIcon>
              {item.label}
            </NavItem>
          ))}
        </SidebarNav>
      </Sidebar>

      <MainContent>
        <AdminHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MobileMenuButton onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </MobileMenuButton>
            <PageTitle>{getPageTitle()}</PageTitle>
          </div>
          <HeaderActions>
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '1.25rem'
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 1rem',
              background: 'var(--color-bg-light)',
              borderRadius: '8px'
            }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                {userProfile?.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                로그아웃
              </button>
            </div>
          </HeaderActions>
        </AdminHeader>

        <Outlet />
      </MainContent>
    </AdminLayoutContainer>
  );
}
