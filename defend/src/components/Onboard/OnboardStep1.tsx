import React from 'react';
import Image from 'next/image';
import Flag from 'react-world-flags'

interface Step1Props {
    onNext: () => void;
    onPrev: () => void;
}

const subdomains = [
    { name: "api.mercadolibre.com", countryCode: "US" },
    { name: "cerbero.mercadolibre.com", countryCode: "US" },
    { name: "citiportal.mercadolibre.com", countryCode: "US" },
    { name: "correo.mercadolibre.com", countryCode: "US" },
    { name: "crmla.mercadolibre.com", countryCode: "US" },
];


const Step1: React.FC<Step1Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[550px] px-8 text-[16px]">
            <p className="text-[#5C5C5C] pb-[20px]  leading-relaxed tracking-normal">
                <strong>Su usuario a sido creado.</strong> verifique su dominio y el alcance y presione continuar para añadir su primer recurso. A continuación vamos a realizar un análisis automatizado sobre su dominio principal.
            </p>

            <h2 className="font-semibold pb-[22px]">Definir superficie de scanner:</h2>

            <div>
                <div className='flex justify-between ml-1'>
                    <h2 className="font-semibold text-gray-400 mb-5 ml-2">www.mercadolibre.com</h2>
                    <div className="w-[30px] h-[25px] relative border-l-1 border-l-gray-400 mr-[20px]">
                        <Image
                            src="/add-scope.png"
                            alt="Logo Codefend"
                            fill
                            className="object-contain mx-3"
                        />
                    </div>

                </div>
                <div className='flex justify-between items-center px-2 mb-3'>
                    <h3 className='text-gray-800 font-semibold'>mercadolibre.com</h3>
                    <Flag code="US" style={{ width: 20, height: 15 }} />
                </div>
                <div className="relative ml-4 mb-3">
                    <div className="absolute top-0 w-[2px] h-full bg-red-500 z-0" />
                    {subdomains.map((subdomain, index) => (
                        <div key={index} className="flex items-center relative z-10">
                            <div className="w-[30px] h-full border-b-2 border-red-500 bg-white z-10"></div>
                            <div className="flex justify-between items-center flex-1 py-[9px] pl-2 pr-2">
                                <span className="text-gray-600 font-medium">{subdomain.name}</span>
                                <Flag code={subdomain.countryCode} style={{ width: 20, height: 15 }} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex mt-9 pb-7">
                <button
                    type="button"
                    className="py-[7px] mr-2 rounded-md bg-gray-300 text-white w-[125px]"
                    onClick={onPrev}
                >
                    Dashboard
                </button>
                <button
                    type="button"
                    className="py-[7px] rounded-md bg-red-400 text-white w-[185px] h-[47px]"
                    onClick={onNext}
                >
                    Próximo
                </button>
            </div>

        </div>
    );
};

export default Step1;
