"use client"

import React from 'react';
import Onboard from '@/components/Onboard/Onboard';

function OnboardPage() {
    const handleClose = () => {
        console.log('Modal cerrado');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado');
    };

    return (
        <div>
            <Onboard onClose={handleClose} onSubmit={handleSubmit} />
        </div>
    );
}

export default OnboardPage;
