import React from 'react';
import Image from 'next/image';

interface Step1Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step3: React.FC<Step1Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[605px] px-8 text-[15px]">
            <p className="text-[#5C5C5C] pb-[25px] leading-relaxed tracking-normal">
                <strong>El dominio mercadolibre.com está siendo analizado.</strong> Los issues y posibles amenazas localizadas se verán en el panel y serán comunicadas por email. Por favor espere aquí o continúe <a className="text-red-500 underline underline-offset-2 decoration-red-500">hacia nuestro dashboard.</a>
            </p>

            <div className="flex justify-center pb-[123px]">
                <Image
                    src="/loader_full_size.png"
                    alt=''
                    width={117}
                    height={120}
                />
            </div>


            <div className="flex mt-9 pb-7">
                <button
                    type="button"
                    className="py-[7px] mr-2 rounded-md bg-gray-300 text-white w-[125px]"
                    onClick={onPrev}
                >
                    Volver
                </button>
                <button
                    type="button"
                    className="py-[7px] rounded-md bg-red-400 text-white w-[185px] h-[47px]"
                    onClick={onNext}
                >
                    Analizar
                </button>
            </div>
        </div>
    );
};

export default Step3;
