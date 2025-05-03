'use client';
import Onboard from '@/components/Onboard/Onboard';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SurfaceExploration from '@/components/SurfaceExploration/SurfaceExploration';
import RadarScanner from '@/components/Radar/Radar';
import Resources from '@/components/Resources/Resources';
import Colaborators from '@/components/Colaborators/Colaborators';

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
      <Navbar/>
      {/* <Onboard onClose={handleClose} onSubmit={handleSubmit} /> */}
      <Colaborators/>
      {/* <SurfaceExploration/> */}
      <Resources/>
    </div>
  );
}

export default Page;
