import {
  StatCardContainer,
  StatHeader,
  StatTitle,
  StatIcon,
  StatValue,
  StatChange
} from '../../../styles/components/admin/statCardStyles';

interface StatCardProps {
  title: string;
  value: number | string;
  change?: string;
  icon: string;
  gradient: string;
}

export default function StatCard({ title, value, change, icon, gradient }: StatCardProps) {
  const isPositive = change ? !change.startsWith('-') : true;

  return (
    <StatCardContainer $gradient={gradient}>
      <StatHeader>
        <StatTitle>{title}</StatTitle>
        <StatIcon>{icon}</StatIcon>
      </StatHeader>
      <StatValue>{value}</StatValue>
      {change && (
        <StatChange $isPositive={isPositive}>
          {change}
        </StatChange>
      )}
    </StatCardContainer>
  );
}
