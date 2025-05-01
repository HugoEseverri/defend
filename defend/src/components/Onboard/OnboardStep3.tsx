import React from 'react';
import Image from 'next/image';

interface Step1Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step3: React.FC<Step1Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[605px] px-8 text-[15px]">
            <p className="text-[#5C5C5C] pb-[25px] leading-relaxed tracking-normal mt-[5px]">
                <strong>El dominio mercadolibre.com está siendo analizado.</strong> Los issues y posibles amenazas localizadas se verán en el panel y serán comunicadas por email. Por favor espere aquí o continúe <a className="text-red-500 underline underline-offset-2 decoration-red-500">hacia nuestro dashboard.</a>
            </p>

            <div className="flex justify-center pb-[123px] relative w-[117px] h-[120px] mx-auto">
                <Image
                    src="/loader_full_size.png"
                    alt=""
                    fill
                    className="object-contain z-0"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[24px] text-gray-700 z-10 translate-x-[3px]">
                    29%
                </span>
            </div>
            <div className='flex justify-between mt-[19px]'>
                <div className='flex flex-col justify-center text-center border-1 border-gray-200 rounded w-[48%] h-[124px]'>
                    <p className='text-red-500 text-4xl font-bold'>26</p>
                    <p className='text-red-500 text-[13px] font-bold'>TOTAL FINDINGS</p>
                </div>
                <div className='flex flex-col justify-center text-center border-1 border-gray-200 rounded w-[48%] h-[124px]'>
                    <p className="text-4xl font-bold">
                        <span className="text-gray-300">12</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">26</span>
                    </p>
                    <p className='text-[13px] font-bold'>ANALIZING FINDINGS</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='mb-1'><strong>- Fase actual:</strong> 1/2 detección activa</p>
                <p><strong>- Dominio:</strong> www.mercadolibre.com</p>
                <p className='mt-1'><strong>- Tiempo promedio estimado:</strong> 5′32″</p>
            </div>

            <div className="flex mt-5 pb-7">
                <button
                    type="button"
                    className="py-[7px] rounded-md bg-gray-300 text-white w-[140px] h-[43px]"
                    onClick={onPrev}
                >
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Step3;
