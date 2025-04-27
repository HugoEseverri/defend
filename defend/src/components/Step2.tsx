import React from 'react';

interface Step2Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col justify-between min-h-[550px] space-y-6 w-[400px] p-[20px]">
            <p className="text-gray-700">
                Vamos a intentar hackearte lo antes posible. Conducimos toda clase de pruebas sobre la superficie de tu empresa, desde pentest convencional, hasta detección de dataleaks, técnicas sociales avanzadas y más...
            </p>

            <h2 className="text-xl font-semibold">Business Details:</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la empresa"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <input
                    type="text"
                    name="companyWebsite"
                    placeholder="Web de la empresa"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <input
                    type="text"
                    name="companySize"
                    placeholder="Tamaño de la empresa"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <input
                    type="text"
                    name="languagePreference"
                    placeholder="Preferencia de idioma"
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

export default Step2;
