'use client';
import Onboarding from '@/components/Onboarding';
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
      <Onboarding onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Page;
