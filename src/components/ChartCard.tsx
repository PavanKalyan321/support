import React from 'react';
import '../styles/ChartCard.css';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  filter?: 'Hourly' | 'Daily' | 'Weekly' | 'Monthly';
  onFilterChange?: (filter: string) => void;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  filter = 'Hourly',
  onFilterChange,
}) => {
  const filterOptions = ['Hourly', 'Daily', 'Weekly', 'Monthly'];

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h3 className="chart-title">{title}</h3>
        {onFilterChange && (
          <div className="filter-dropdown">
            <select
              value={filter}
              onChange={(e) => onFilterChange(e.target.value)}
              className="filter-select"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="chart-content">{children}</div>
    </div>
  );
};

export default ChartCard;
