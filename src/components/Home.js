import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import TopBar from './TopBar';
import LeftNav from './LeftNav';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="home-container">
      <TopBar />
      <div className="home-content">
        <LeftNav />
        <div className="main-content">
          <div className="content-area">
            <h1>Welcome to Dashboard</h1>
            <p>Select a menu item from the left navigation to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;