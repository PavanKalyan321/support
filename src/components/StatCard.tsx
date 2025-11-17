import React from 'react';
import '../styles/StatCard.css';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  unit?: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  unit,
  change,
  isPositive,
  bgColor,
  iconBgColor,
}) => {
  return (
    <div className="stat-card" style={{ backgroundColor: bgColor }}>
      <div className="stat-card-header">
        <div className="stat-icon" style={{ backgroundColor: iconBgColor }}>
          {icon}
        </div>
        <div className="stat-info">
          <h3 className="stat-title">{title}</h3>
          <p className="stat-value">
            {value}
            {unit && <span className="stat-unit">{unit}</span>}
          </p>
        </div>
      </div>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '↑' : '↓'} {change}
      </div>
    </div>
  );
};

export default StatCard;
