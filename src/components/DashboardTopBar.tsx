import React, { useState } from 'react';
import { AlertRegular, SettingsRegular, SearchRegular } from '@fluentui/react-icons';
import '../styles/DashboardTopBar.css';

interface Alert {
  type: 'high' | 'medium' | 'low';
  count: number;
}

interface DashboardTopBarProps {
  userImage?: string;
  alerts?: Alert[];
  dateRange?: string;
}

const DashboardTopBar: React.FC<DashboardTopBarProps> = ({
  userImage,
  alerts,
  dateRange,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const defaultAlerts = [
    { type: 'high', count: 100 },
    { type: 'medium', count: 100 },
    { type: 'low', count: 100 },
  ];

  const displayAlerts = alerts || defaultAlerts;

  return (
    <div className="dashboard-topbar">
      <div className="topbar-left">
        <div className="search-box">
          <SearchRegular className="search-icon" />
          <input
            type="text"
            placeholder="Search ...."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="topbar-center">
        <div className="alerts-container">
          {displayAlerts.map((alert, index) => (
            <div key={index} className={`alert-badge alert-${alert.type}`}>
              <AlertRegular className="alert-icon" />
              <span className="alert-count">{alert.count}</span>
              <span className="alert-label">
                {alert.type === 'high'
                  ? 'High Alert'
                  : alert.type === 'medium'
                  ? 'Medium Alert'
                  : 'Low Alert'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="topbar-right">
        {dateRange && <div className="date-range">{dateRange}</div>}
        <button className="topbar-icon-btn">
          <SettingsRegular />
        </button>
        {userImage && (
          <img src={userImage} alt="User" className="topbar-avatar" />
        )}
      </div>
    </div>
  );
};

export default DashboardTopBar;
