import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import { RootState, AppDispatch } from '../store/store';
import './TopBar.css';

const TopBar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="topbar">
      <div className="topbar-brand">
        <div className="brand-logo">
          <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FF6B35">
              <path d="M20 5 L28 12 L25 15 L20 10 L15 15 L12 12 Z" />
              <path d="M10 20 L15 15 L18 18 L20 16 L22 18 L25 15 L30 20" />
              <circle cx="14" cy="26" r="3" />
              <circle cx="26" cy="26" r="3" />
              <rect x="10" y="20" width="20" height="2" />
              <rect x="12" y="22" width="16" height="6" rx="1" />
            </g>
          </svg>
        </div>
        <div className="brand-text">
          <h2 className="brand-name">The Soaltee</h2>
          <p className="brand-subtitle">Hotels & Resorts</p>
        </div>
      </div>
      <div className="topbar-right">
        <span className="welcome-text">Welcome, {user?.username}</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default TopBar;