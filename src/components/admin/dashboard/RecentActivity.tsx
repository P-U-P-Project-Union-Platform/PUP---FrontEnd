import { useAdmin } from '../../../contexts/AdminContext';
import {
  ActivityContainer,
  ActivityList,
  ActivityItem,
  ActivityIcon,
  ActivityContent,
  ActivityAction,
  ActivityDetails,
  ActivityTime
} from '../../../styles/pages/admin/dashboardStyles';

const getActivityIcon = (action: string) => {
  if (action.includes('승인')) return { icon: '✅', color: 'rgba(34, 197, 94, 0.2)' };
  if (action.includes('거부')) return { icon: '❌', color: 'rgba(239, 68, 68, 0.2)' };
  if (action.includes('정지')) return { icon: '🚫', color: 'rgba(239, 68, 68, 0.2)' };
  if (action.includes('역할')) return { icon: '👤', color: 'rgba(59, 130, 246, 0.2)' };
  if (action.includes('숨김')) return { icon: '👁️', color: 'rgba(251, 146, 60, 0.2)' };
  return { icon: '📝', color: 'rgba(156, 163, 175, 0.2)' };
};

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
};

export default function RecentActivity() {
  const { activityLogs } = useAdmin();

  return (
    <ActivityContainer>
      <ActivityList>
        {activityLogs.slice(0, 5).map(log => {
          const { icon, color } = getActivityIcon(log.action);
          return (
            <ActivityItem key={log.id}>
              <ActivityIcon color={color}>{icon}</ActivityIcon>
              <ActivityContent>
                <ActivityAction>
                  {log.action}: {log.target}
                </ActivityAction>
                <ActivityDetails>{log.details}</ActivityDetails>
              </ActivityContent>
              <ActivityTime>{formatTime(log.timestamp)}</ActivityTime>
            </ActivityItem>
          );
        })}
      </ActivityList>
    </ActivityContainer>
  );
}
