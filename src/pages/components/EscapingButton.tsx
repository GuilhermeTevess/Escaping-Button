// components/EscapingButton.tsx
import React, { useState, useEffect } from 'react';

const EscapingButton = () => {
  const [position, setPosition] = useState<{ top: string, left: string }>({ top: '70%', left: '50%' });

  const randomPosition = () => {
    const newTop = Math.floor(Math.random() * 80) + 10 + '%';
    const newLeft = Math.floor(Math.random() * 80) + 10 + '%';
    setPosition({ top: newTop, left: newLeft });
  };

  const handleMouseMove = (event: MouseEvent) => {
    const buttonElement = document.getElementById('escapingButton');
    
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();

      const distance = Math.sqrt(
        Math.pow(event.clientX - (rect.left + rect.width / 2), 2) +
        Math.pow(event.clientY - (rect.top + rect.height / 2), 2)
      );

      if (distance < 100) {
        randomPosition();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <button
      id="escapingButton"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        padding: '25px 50px',
        cursor: 'pointer',
        transition: 'top 0.05s ease, left 0.05s ease',
        pointerEvents: 'none',
        border: '3px solid #fff',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '22px',
        fontFamily: "'Poppins', sans-serif",
        borderRadius: '12px',
      }}
    >
      Yes
    </button>
  );
};

export default EscapingButton;
