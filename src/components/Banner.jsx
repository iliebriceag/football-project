import React from 'react';

function Notification({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="alert alert-dark text-center fixed-top mt-2 container py-4 border-0" role="alert">
      {message}
    </div>
  );
}

export default Notification;
