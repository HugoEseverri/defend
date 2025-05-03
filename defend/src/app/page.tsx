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
import Home from './Home/page';
import Row3 from './Row3/page';

function Page() {
  const handleClose = () => {
    console.log('Modal cerrado');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div>
      <Home/>
    </div>
  );
}

export default Page;
