'use client';
import Onboard from '@/components/Onboard/Onboard';
import React from 'react';

function Page() {
  const handleClose = () => {
    console.log('Modal cerrado');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div className='bg-gray-400'>
      <Onboard onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Page;
