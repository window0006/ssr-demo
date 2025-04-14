import React from 'react';

const Contact: React.FC = () => {
  // throw erro
  throw new Error('123')
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <p>Feel free to contact us!</p>
    </div>
  );
};

export default Contact; 