'use client';

import React from 'react';
import Home from './Home/page';
import Onboarding from '@/components/Onboarding/Onboarding';
import AppShell from './AppShell';
import NavUser from '@/components/NavUser/NavUser';
import { handleClientScriptLoad } from 'next/script';
import Onboard from '@/components/Onboard/Onboard';


function Page() {
  const handleClose = () => {
    console.log('Modal cerrado');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div className='flex justify-center'>
      <div>
        <Onboarding onClose={handleClose} onSubmit={handleSubmit}/>
      </div>
      <div>
        <Onboard onClose={handleClose} onSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default Page;
