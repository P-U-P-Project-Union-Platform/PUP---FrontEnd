import { useAdmin } from '../../../contexts/AdminContext';
import StatCard from '../common/StatCard';
import { StatsGrid } from '../../../styles/pages/admin/dashboardStyles';
import { theme } from '../../../styles/theme';

export default function StatsOverview() {
  const { stats } = useAdmin();

  return (
    <StatsGrid>
      <StatCard
        title="전체 사용자"
        value={stats?.users?.total || 0}
        change={`+${stats?.users?.newThisMonth || 0} 이번 달`}
        icon="👥"
        gradient={theme.colors.gradientBlue}
      />
      <StatCard
        title="대기 중인 프로젝트"
        value={stats?.projects?.pending || 0}
        change={`${stats?.projects?.total || 0}개 중`}
        icon="⏳"
        gradient={theme.colors.gradientPurple}
      />
      <StatCard
        title="신고된 게시글"
        value={stats?.posts?.reported || 0}
        change={(stats?.posts?.hidden || 0) > 0 ? `${stats?.posts?.hidden}개 숨김` : '처리 완료'}
        icon="🚨"
        gradient={theme.colors.gradientOrange}
      />
      <StatCard
        title="활성 사용자"
        value={stats?.users?.active || 0}
        change={`${Math.round(((stats?.users?.active || 0) / (stats?.users?.total || 1)) * 100)}% 활성`}
        icon="✅"
        gradient={theme.colors.gradientGreen}
      />
    </StatsGrid>
  );
}
