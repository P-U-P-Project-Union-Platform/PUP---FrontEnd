import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import type { Notification } from '../../types/notification';
import { mockNotifications } from '../../mocks/notifications';
import { notificationService } from '../../services/notificationService';
import { useApp } from '../../contexts/AppContext';

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: ${theme.fontSizes.xl};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  transition: color ${theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-text-white);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background: var(--color-error);
  color: white;
  font-size: 10px;
  font-weight: ${theme.fontWeights.bold};
  padding: 2px 5px;
  border-radius: ${theme.borderRadius.full};
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 360px;
  max-height: 480px;
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: calc(100vw - 32px);
    right: -${theme.spacing.lg};
  }
`;

const DropdownHeader = styled.div`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin: 0;
`;

const MarkAllReadButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: background ${theme.transitions.base};

  &:hover {
    background: var(--color-bg-gray);
  }
`;

const NotificationList = styled.div`
  overflow-y: auto;
  max-height: 400px;
`;

const NotificationItem = styled.div<{ $isRead: boolean }>`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  background: ${props => props.$isRead ? 'transparent' : 'rgba(99, 102, 241, 0.05)'};
  transition: background ${theme.transitions.base};

  &:hover {
    background: var(--color-bg-gray);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.xs};
`;

const NotificationTitle = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const UnreadDot = styled.span`
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
`;

const NotificationMessage = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin: 0 0 ${theme.spacing.xs} 0;
  line-height: 1.5;
`;

const NotificationTime = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: var(--color-text-tertiary);
`;

const EmptyState = styled.div`
  padding: ${theme.spacing['3xl']};
  text-align: center;
  color: var(--color-text-tertiary);
`;

export default function NotificationDropdown() {
  const navigate = useNavigate();
  const { userProfile } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // 알림 목록 조회 (백엔드 API 연동)
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!userProfile?.username) return;

      setLoading(true);
      try {
        const data = await notificationService.getNotifications(userProfile.username);
        setNotifications(data);
      } catch (error) {
        console.error('알림 조회 실패, Mock 데이터 사용:', error);
        // 에러 시 Mock 데이터 유지
        setNotifications(mockNotifications);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userProfile?.username]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAllRead = async () => {
    if (!userProfile?.username) return;

    try {
      await notificationService.markAllAsRead(userProfile.username);
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    } catch (error) {
      console.error('모든 알림 읽음 처리 실패:', error);
      // 에러 발생 시에도 UI는 업데이트
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    }
  };

  const handleNotificationClick = async (notification: Notification) => {
    // 읽음 처리 (백엔드 API 호출)
    try {
      await notificationService.markAsRead(notification.id);
    } catch (error) {
      console.error('알림 읽음 처리 실패:', error);
    }

    // UI 업데이트
    setNotifications(notifications.map(n =>
      n.id === notification.id ? { ...n, isRead: true } : n
    ));

    // 링크로 이동
    if (notification.link) {
      navigate(notification.link);
    }

    setIsOpen(false);
  };

  const getTimeAgo = (timestamp: string) => {
    const now = Date.now();
    const time = new Date(timestamp).getTime();
    const diff = now - time;

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    return `${days}일 전`;
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <NotificationButton onClick={() => setIsOpen(!isOpen)}>
        🔔
        {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
      </NotificationButton>

      <Dropdown $isOpen={isOpen}>
        <DropdownHeader>
          <DropdownTitle>알림</DropdownTitle>
          {unreadCount > 0 && (
            <MarkAllReadButton onClick={handleMarkAllRead}>
              모두 읽음
            </MarkAllReadButton>
          )}
        </DropdownHeader>

        <NotificationList>
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                $isRead={notification.isRead}
                onClick={() => handleNotificationClick(notification)}
              >
                <NotificationHeader>
                  <NotificationTitle>
                    {!notification.isRead && <UnreadDot />}
                    {notification.title}
                  </NotificationTitle>
                </NotificationHeader>
                <NotificationMessage>{notification.message}</NotificationMessage>
                <NotificationTime>{getTimeAgo(notification.timestamp)}</NotificationTime>
              </NotificationItem>
            ))
          ) : (
            <EmptyState>알림이 없습니다</EmptyState>
          )}
        </NotificationList>
      </Dropdown>
    </div>
  );
}
