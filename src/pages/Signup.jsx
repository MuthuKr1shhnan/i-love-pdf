import React, { useState } from 'react';

const Signup = () => {
  const [buttonState, setButtonState] = useState('default'); // 'default', 'loading', 'success', 'error', 'disabled'
  
  const handleSignup = () => {
    setButtonState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setButtonState('success');
      setTimeout(() => setButtonState('default'), 2000);
    }, 1500);
  };

  const getButtonConfig = () => {
    switch(buttonState) {
      case 'loading':
        return {
          text: 'Creating Account...',
          icon: '⏳',
          bgColor: '#4a90e2',
          disabled: true
        };
      case 'success':
        return {
          text: 'Account Created!',
          icon: '✅',
          bgColor: '#4BB543',
          disabled: true
        };
      case 'error':
        return {
          text: 'Signup Failed',
          icon: '❌',
          bgColor: '#ff3333',
          disabled: false
        };
      case 'disabled':
        return {
          text: 'Sign Up',
          icon: '',
          bgColor: '#cccccc',
          disabled: true
        };
      default:
        return {
          text: 'Sign Up Now',
          icon: '🚀',
          bgColor: '#0066ff',
          disabled: false
        };
    }
  };

  const { text, icon, bgColor, disabled } = getButtonConfig();

  return (
    <button
      onClick={handleSignup}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Signup;