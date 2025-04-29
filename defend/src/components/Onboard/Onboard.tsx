import React, { useState } from 'react';
import Image from 'next/image';
import Step1 from './OnboardStep1';
import Step2 from './OnboardStep2';



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

    const handleFinish = () => {
        console.log("Proceso completado");
    };

    return (
        <div className="w-[440px] mx-auto border-gray-300 border rounded bg-white">
            <Image
                src="/logo-color.png"
                alt="Codefend logo"
                width={240}
                height={40}
                className='ml-15 mt-7 mb-7'
            />
            <div className='px-8'>
                {step === 1 && <Step1 onNext={handleNext} onPrev={handlePrev} />}
                {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
                {/* {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />} */}
            </div>
        </div>
    );


};

export default Onboard;