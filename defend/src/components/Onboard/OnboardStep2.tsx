import React from 'react';
import Image from 'next/image';

interface Step1Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step2: React.FC<Step1Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[605px] px-8 text-[15px]">
            <p className="text-[#5C5C5C] pb-[75px]  leading-relaxed tracking-normal">
                Vamos a realizar un análisis automático sobre el dominio seleccionado. Confirma que desea lanzar un análisis automatico sobre <strong>mercadolibre.com</strong>
            </p>
            <div className="flex justify-center pb-[123px]">
                <Image
                    src="/codefend-eye2.png"
                    alt=''
                    width={180}
                    height={180}
                />
            </div>


            <div className="flex mt-[37px] pb-7">
                <button
                    type="button"
                    className="py-[7px] mr-2 rounded-md bg-gray-300 text-white w-[125px]"
                    onClick={onPrev}
                >
                    Volver
                </button>
                <button
                    type="button"
                    className="py-[7px] rounded-md bg-red-400 text-white w-[185px] h-[43px]"
                    onClick={onNext}
                >
                    Analizar
                </button>
            </div>
        </div>
    );
};

export default Step2;
