import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import './TopBar.css';

const TopBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h3>Dashboard</h3>
      </div>
      <div className="topbar-right">
        <span>Welcome, {user?.username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopBar;