import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
  const navItems = [
    { path: '/home', label: 'Dashboard', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/reports', label: 'Reports', icon: '📋' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/notifications', label: 'Notifications', icon: '🔔' },
    { path: '/help', label: 'Help', icon: '❓' },
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