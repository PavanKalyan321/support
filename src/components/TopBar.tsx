import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import './TopBar.css';

interface AlertBadgeProps {
  count: number;
  label: string;
  color: string;
  borderColor: string;
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ count, label, color, borderColor }) => {
  return (
    <div
      className="topbar-alert-badge"
      style={{ borderColor }}
    >
      {/* Icon Container */}
      <div
        className="topbar-alert-icon"
        style={{ backgroundColor: color }}
      >
        <Bell className="w-[17px] h-[19px] text-white" strokeWidth={2} />
      </div>

      {/* Count */}
      <span className="topbar-alert-count">
        {count}
      </span>

      {/* Label */}
      <span className="topbar-alert-label">
        {label}
      </span>
    </div>
  );
};

const TopBar: React.FC = () => {

  return (
    <div className="topbar-wrapper">
      {/* Top Nav Bar */}
      <div className="topbar">

        {/* Left Section: Label/Breadcrumb */}
        <div className="topbar-left">
          <span className="topbar-label">Dashboard</span>
        </div>

        {/* Center Section: Search and Alerts */}
        <div className="topbar-center">

          {/* Search Input */}
          <div className="topbar-search">
            <input
              type="text"
              placeholder="Search ...."
              className="topbar-search-input"
            />
            <Search className="topbar-search-icon" />
          </div>

          {/* Alert Badges Container */}
          <div className="topbar-alerts">

            {/* High Alert Badge */}
            <AlertBadge
              count={100}
              label="High Alert"
              color="#F44455"
              borderColor="#F44455"
            />

            {/* Medium Alert Badge */}
            <AlertBadge
              count={100}
              label="Medium Alert"
              color="#5B7DFF"
              borderColor="#5B7DFF"
            />

            {/* Low Alert Badge */}
            <AlertBadge
              count={100}
              label="Low Alert"
              color="#F9984E"
              borderColor="#F9984E"
            />

            {/* Settings and Profile */}
            <div className="topbar-actions">
              {/* Settings Icon */}
              <button className="topbar-icon-btn">
                <Settings className="w-[14px] h-[15px] text-[#242424]" strokeWidth={1.5} />
              </button>

              {/* Profile Image */}
              <div className="topbar-avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;