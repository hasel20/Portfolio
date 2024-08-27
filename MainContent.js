import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="text-box">
        <h1>Main Title</h1>
        <p>This is a large text box where you can put any content you like.</p>
      </div>
      <div className="image-box">
        <img src="https://via.placeholder.com/400x300" alt="Placeholder" />
      </div>
    </div>
  );
}

export default MainContent;
