import React from 'react';
import '../styles/WelcomeCard.css';

interface WelcomeCardProps {
  userName: string;
  userImage?: string;
  subtitle: string;
  onAddWidgets?: () => void;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  userName,
  userImage,
  subtitle,
  onAddWidgets,
}) => {
  return (
    <div className="welcome-card">
      <div className="welcome-content">
        <div className="welcome-user">
          {userImage && (
            <img src={userImage} alt={userName} className="user-avatar" />
          )}
          <div className="welcome-text">
            <h2>Welcome Back, {userName}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        {onAddWidgets && (
          <button className="add-widgets-btn" onClick={onAddWidgets}>
            + Add Widgets
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomeCard;
