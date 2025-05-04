import React from 'react';
import Image from 'next/image';


interface Step3Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
    return (
        <div className='flex flex-col h-[550px] px-[22px]'>
            <p className="text-[#5C5C5C] pb-[10px] leading-relaxed font-medium px-2">
                Una vez que crees tu usuario, vamos a ayudarte con el alta de tu primer recurso,
                y realizaremos una serie de pruebas automatizadas empleando escanners automatizados
                e inteligencia artificial.
            </p>
            <Image
                src="/iconomail.png"
                alt='ícono de email'
                width={100}
                height={100}
                className='mb-5'
            />
            <h2 className="font-semibold pb-[17px]">Confirme su email</h2>
            <p className="text-gray-600 mb-4">
                Please check your inbox, copy the verification code and paste it in the field below
                to confirm your email. <strong>Or click, the link in the mail.</strong>
            </p>
            <form className="space-y-3">
                <input
                    type="text"
                    name="companyName"
                    placeholder="Unique reference code"
                    className="w-full p-2"
                    required
                />
            </form>
            <div className="flex mt-[37px] ml-[8px] gap-[5px]">
                <button
                    type="button"
                    className="py-[7px] mr-1 rounded-md bg-gray-300 text-white w-[120px]"
                    onClick={onPrev}
                >
                    Previo
                </button>
                <button
                    type="button"
                    className=" py-[7px] rounded-md bg-red-400 text-white w-[185px] h-[47px]"
                    onClick={onNext}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default Step3;
