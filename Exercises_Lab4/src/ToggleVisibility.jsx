import React, { useState } from 'react';

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleToggle}>
        {visible ? 'Hide Content' : 'Show Content'}
      </button>
      {visible && <p>Hello World!</p>}
    </div>
  );
}

export default ToggleVisibility;
