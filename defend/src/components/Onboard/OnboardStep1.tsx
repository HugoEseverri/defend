import React from 'react';
import Image from 'next/image';

interface Step1Props {
    onNext: () => void;
    onPrev: () => void;
}

const subdomains = [
    { name: "api.mercadolibre.com", flag: "🇺🇸" },
    { name: "cerbero.mercadolibre.com", flag: "🇦🇷" },
    { name: "citiportal.mercadolibre.com", flag: "🇧🇷" },
    { name: "correo.mercadolibre.com", flag: "🇲🇽" },
    { name: "crmla.mercadolibre.com", flag: "🇨🇴" },
];


const Step1: React.FC<Step1Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[550px] px-14">
            <p className="text-[#5C5C5C] pb-[28px] font-medium leading-relaxed">
                <strong>Su usuario a sido creado.</strong> verifique su dominio y el alcance y presione continuar para añadir su primer recurso. A continuación vamos a realizar un análisis automatizado sobre su dominio principal.
            </p>

            <h2 className="font-semibold pb-[22px]">Definir superficie de scanner:</h2>

            <div>
                <div className='flex justify-between'>
                    <h2 className="font-semibold text-gray-400 mb-4 ml-2">www.mercadolibre.com</h2>
                    <div className="w-[30px] h-[25px] relative border-l-1 border-l-gray-400">
                        <Image
                            src="/add-scope.png"
                            alt="Logo Codefend"
                            fill
                            className="object-contain "
                        />
                    </div>


                </div>
                <div>
                    {subdomains.map((subdomain, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border-l-2 border-b-2 border-red-500 py-3"
                        >
                            <span className="text-gray-600 font-medium">{subdomain.name}</span>
                            <span className="text-lg">{subdomain.flag}</span>
                        </div>
                    ))}
                </div>
            </div>




            <form className="space-y-3">
                {/* <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Professional Email"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                /> */}
                {/* <div className="flex">
                    <select
                        name="countryCode"
                        className="w-[100px] border-y-1 border-r-1 border-gray-400 p-2 focus:border-red-500 focus:outline-none"
                        required
                    >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+54">🇦🇷 +54</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+57">🇨🇴 +57</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className="flex-1 py-2 px-4 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                        required
                    />
                </div> */}
                <div className="flex mt-9">
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
            </form>
        </div>
    );
};

export default Step1;
