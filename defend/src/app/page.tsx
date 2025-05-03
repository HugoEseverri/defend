'use client';
import Onboard from '@/components/Onboard/Onboard';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SurfaceExploration from '@/components/SurfaceExploration/SurfaceExploration';
import RadarScanner from '@/components/Radar/Radar';
import Resources from '@/components/Resources/Resources';
import Colaborators from '@/components/Colaborators/Colaborators';
import Contact from '@/components/Contact/Contact';
import IssuesCounter from '@/components/IssuesCounter/IssuesCounter';
import RiskCounter from '@/components/RiskCounter/RiskCounter';
import Scanner from '@/components/Scanner/Scanner';
import Total from '@/components/Total/Total';

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
      <IssuesCounter/>
      <Scanner progress={60} />
      <Total/>

      <RiskCounter/>
      <Onboard onClose={handleClose} onSubmit={handleSubmit} />
      <Contact/>
      <Colaborators/>
      <SurfaceExploration/>
      <Resources/>
    </div>
  );
}

export default Page;
