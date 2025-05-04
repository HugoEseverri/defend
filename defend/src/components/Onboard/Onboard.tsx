"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Step1 from './OnboardStep1';
import Step2 from './OnboardStep2';
import Step3 from './OnboardStep3';

interface OnboardProps {
    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Onboard: React.FC<OnboardProps> = ({ onClose, onSubmit }) => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <div className='relative'>
            <div className="fixed top-0 left-0 right-0 bottom-0  z-40" />
            <div className="w-[440px] mx-auto border-gray-300 border rounded bg-white p-6 z-50 relative">
                <Image
                    src="/logo-color.png"
                    alt="Codefend logo"
                    width={240}
                    height={40}
                    className="ml-15 mt-1 mb-7"
                />
                <div className="">
                    {step === 1 && <Step1 onNext={handleNext} onPrev={handlePrev} onClose={onClose} />}
                    {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
                    {step === 3 && <Step3 onClose={onClose} />}
                </div>
            </div>
        </div>
    );
};

export default Onboard;
