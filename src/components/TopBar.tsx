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

        {/* Left Section: Hotel Branding */}
        <div className="topbar-left">
          <div className="topbar-logo">
            <svg width="40" height="26" viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8L30 18L20 28" stroke="#E5672A" strokeWidth="3" fill="none"/>
              <circle cx="15" cy="18" r="10" fill="#E5672A"/>
            </svg>
          </div>
          <div className="topbar-brand-info">
            <div className="topbar-brand-name">The Soaltee</div>
            <div className="topbar-brand-subtitle">Hotels & Resorts</div>
          </div>
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