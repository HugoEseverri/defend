import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
interface Step3Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
    return (
        <div className='flex flex-col justify-between min-h-[600px] space-y-6 w-[400px] p-[20px]'>
            <p className="text-gray-600">
                Una vez que crees tu usuario, vamos a ayudarte con el alta de tu primer recurso,
                y realizaremos una serie de pruebas automatizadas empleando escanners automatizados
                e inteligencia artificial.
            </p>

            <div className="flex">
                <div className="relative">
                    <FaEnvelope className="text-6xl text-red-600" />
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        1
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold">Confirme su email</h2>

            <p className="text-gray-600">
                Please check your inbox, copy the verification code and paste it in the field below
                to confirm your email. Or click the link in the mail.
            </p>
            <form className="space-y-4">
                <input
                    type="text"
                    name="companyName"
                    placeholder="Unique reference code"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </form>
            <div className="flex justify-between pt-6">
                <button
                    type="button"
                    className="px-6 py-2 rounded-md bg-gray-300 text-gray-700"
                    onClick={onPrev}
                >
                    Previo
                </button>

                <button
                    type="button"
                    className="px-6 py-2 rounded-md bg-red-600 text-white"
                    onClick={onNext}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default Step3;
