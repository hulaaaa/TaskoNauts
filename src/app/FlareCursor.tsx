'use client';
import React, { useState, useEffect } from 'react';

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e:any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      target.tagName.toLowerCase() === 'button' ||
      target.tagName.toLowerCase() === 'a' ||
      target.tagName.toLowerCase() === 'input' ||
      target.getAttribute('data-cursor-pointer') !== null ||
      window.getComputedStyle(target).cursor === 'pointer'
    );
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 20 : 10;

  return (
    <div
      className={`flare ${isPointer ? 'pointer' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
}

export default FlareCursor;
