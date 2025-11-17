import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home20Regular,
  AlertRegular,
  BoxRegular,
  PowerRegular,
  WaterRegular,
  EarthLeafRegular,
  BrightnessHighRegular,
  DocumentRegular,
} from '@fluentui/react-icons';
import './LeftNav.css';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const LeftNav: React.FC = () => {
  const navItems: NavItem[] = [
    { path: '/home', label: 'Homepage', icon: <Home20Regular /> },
    { path: '/alarms', label: 'Alarms', icon: <AlertRegular /> },
    { path: '/assets', label: 'Assets', icon: <BoxRegular /> },
    { path: '/energy', label: 'Energy', icon: <PowerRegular /> },
    { path: '/water', label: 'Water', icon: <WaterRegular /> },
    { path: '/sustainability', label: 'Sustainability', icon: <EarthLeafRegular /> },
    { path: '/lighting', label: 'Lighting', icon: <BrightnessHighRegular /> },
    { path: '/reports', label: 'Reports', icon: <DocumentRegular /> },
  ];

  return (
    <div className="leftnav">
      <div className="nav-header">
        <h2>Menu</h2>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default LeftNav;