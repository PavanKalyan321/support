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