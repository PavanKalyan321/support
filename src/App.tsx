import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import Login from './components/Login';
import Home from './components/Home';
import BackgroundPage from './components/BackgroundPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/background" element={<BackgroundPage />} />
            <Route path="/alarms" element={<Home />} />
            <Route path="/assets" element={<Home />} />
            <Route path="/energy" element={<Home />} />
            <Route path="/water" element={<Home />} />
            <Route path="/sustainability" element={<Home />} />
            <Route path="/lighting" element={<Home />} />
            <Route path="/reports" element={<Home />} />
            <Route path="/profile" element={<Home />} />
            <Route path="/settings" element={<Home />} />
            <Route path="/analytics" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="/notifications" element={<Home />} />
            <Route path="/help" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
