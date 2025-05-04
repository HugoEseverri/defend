'use client';

import React from 'react';
import Home from './Home/page';
import Onboarding from '@/components/Onboarding/Onboarding';
import AppShell from './AppShell';
import NavUser from '@/components/NavUser/NavUser';


function Page() {
  // const handleClose = () => {
  //   console.log('Modal cerrado');
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Formulario enviado');
  // };

  return (
    <div>
      <AppShell/>
    </div>
  );
}

export default Page;
