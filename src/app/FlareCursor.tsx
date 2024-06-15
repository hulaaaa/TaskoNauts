'use client'
import React, { useState, useEffect } from 'react';

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Додано стейт для визначення, чи відкрите модальне вікно

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

  useEffect(() => {
    // Перевірка наявності класу, що показує відкрите модальне вікно
    const modalOpen = document.querySelector('.Dialog.Root-open');
    if (modalOpen) {
      setIsModalOpen(true); // Якщо вікно відкрите, встановлюємо isModalOpen в true
    } else {
      setIsModalOpen(false); // Інакше - в false
    }
  }, []);

  return (
    <div
      className={`flare ${isPointer ? 'pointer' : ''} ${isModalOpen ? 'hidden' : ''} ${isPointer && !isModalOpen ? 'cursor-normal' : ''}`} 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${isPointer ? 20 : 10}px`,
        height: `${isPointer ? 20 : 10}px`,
      }}
    ></div>
  );
}

export default FlareCursor;
