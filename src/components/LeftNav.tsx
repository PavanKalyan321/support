import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  Bell,
  Package,
  Zap,
  Droplet,
  Leaf,
  Lightbulb,
  FileText
} from 'lucide-react';
import './LeftNav.css';

interface NavItem {
  id: string;
  path: string;
  label: string;
  icon: React.ReactNode;
}

const LeftNav: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'Homepage', path: '/home', label: 'Homepage', icon: <LayoutGrid size={18} strokeWidth={1.5} /> },
    { id: 'Alarms', path: '/alarms', label: 'Alarms', icon: <Bell size={18} strokeWidth={1.5} /> },
    { id: 'Assets', path: '/assets', label: 'Assets', icon: <Package size={18} strokeWidth={1.5} /> },
    { id: 'Energy', path: '/energy', label: 'Energy', icon: <Zap size={18} strokeWidth={1.5} /> },
    { id: 'Water', path: '/water', label: 'Water', icon: <Droplet size={18} strokeWidth={1.5} /> },
    { id: 'Sustainability', path: '/sustainability', label: 'Sustainability', icon: <Leaf size={18} strokeWidth={1.5} /> },
    { id: 'Lighting', path: '/lighting', label: 'Lighting', icon: <Lightbulb size={18} strokeWidth={1.5} /> },
    { id: 'Reports', path: '/reports', label: 'Reports', icon: <FileText size={18} strokeWidth={1.5} /> },
  ];

  return (
    <div className="leftnav-container">
      {/* Top black bar */}
      <div className="leftnav-topbar" />

      {/* Logo section */}
      <div className="leftnav-brand">
        <div className="leftnav-logo">
          <svg width="60" height="37" viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L30 18L20 28" stroke="#E5672A" strokeWidth="3" fill="none"/>
            <circle cx="15" cy="18" r="10" fill="#E5672A"/>
          </svg>
        </div>
        <div className="leftnav-brand-text">
          <div className="leftnav-brand-name">The Soaltee</div>
          <div className="leftnav-brand-subtitle">Hotels & Resorts</div>
        </div>
      </div>

      {/* Divider line */}
      <div className="leftnav-divider" />

      {/* Menu items */}
      <nav className="leftnav-menu">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `leftnav-item ${isActive ? 'active' : ''}`}
          >
            <div className="leftnav-icon">
              {React.cloneElement(item.icon as React.ReactElement, {
                style: { color: '#E5672A', stroke: '#E5672A' }
              } as any)}
            </div>
            <span className="leftnav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default LeftNav;