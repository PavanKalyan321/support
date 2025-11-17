import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { AppDispatch } from '../store/store';
import './BackgroundPage.css';

const BackgroundPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username }));
      navigate('/home');
    }
  };

  return (
    <div
      className="background-page"
      style={{ backgroundImage: `url(/loginbackground.svg)` }}
    >
      {/* Login Form Popup - Left Side */}
      <div className="login-popup">
        <div className="login-form-box">
          <div className="login-logo">
            <img src="/loginheader.svg" alt="Logo" />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username <span className="required">*</span></label>
              <input
                id="username"
                type="text"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password <span className="required">*</span></label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to our <a href="#terms">Terms of use</a> and <a href="#privacy">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="login-button">
              Register Now
            </button>
          </form>
        </div>
      </div>

      {/* Content Overlay - Right Side */}
      <div className="content-overlay">
        <h1>The Soaltee Hotel</h1>
        <p className="tagline">Building management system</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ut eu locus et tellus amet in neque. Pellentesque elit sed tamper vestibulum sit.
        </p>
      </div>
    </div>
  );
};

export default BackgroundPage;
