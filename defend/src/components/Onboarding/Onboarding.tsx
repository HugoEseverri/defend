"use client"

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

interface OnboardingProps {
    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onClose, onSubmit }) => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        setStep((prev) => prev - 1);
    };

    const handleFinish = () => {
        console.log("Proceso completado");
        onClose();
    };

    return (
        <div className="w-[440px] mx-auto border-gray-300 border rounded bg-white">
            <Image
                src="/logo-color.png"
                alt="Codefend logo"
                width={240}
                height={40}
                className='ml-12 mt-7 mb-4'
            />

            <h1 className="font-semibold mb-[5px] ml-[64px] py-3 text-gray-700">Nuevo usuario</h1>
            <div className="mb-4 pt-3">
                <ProgressBar step={step} />
            </div>

            <div className='px-8'>
                {step === 1 && <Step1 onNext={handleNext} />}
                {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
                {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
                {step === 4 && <Step4 onFinish={handleFinish} onPrev={handlePrev} onClose={handleFinish} />}
            </div>
        </div>
    );


};

export default Onboarding;