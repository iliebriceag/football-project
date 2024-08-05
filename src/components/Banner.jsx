import React from 'react';
import './../css/Banner.css';

function Notification({ message, visible }) {
  if (!visible) return null;

  return (
    <div>
      <div className='banner'> {message} </div>
    </div>
  );
}

export default Notification;
