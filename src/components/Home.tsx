import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import TopBar from './TopBar';
import LeftNav from './LeftNav';
import Dashboard from './Dashboard';
import './Home.css';

const Home: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="home-container">
      <TopBar />
      <div className="home-content">
        <LeftNav />
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;