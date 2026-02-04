import StatsOverview from '../../components/admin/dashboard/StatsOverview';
import RecentActivity from '../../components/admin/dashboard/RecentActivity';
import { DashboardContainer, SectionTitle } from '../../styles/pages/admin/dashboardStyles';

export default function AdminDashboard() {
  return (
    <DashboardContainer>
      <StatsOverview />

      <SectionTitle>최근 활동</SectionTitle>
      <RecentActivity />
    </DashboardContainer>
  );
}
