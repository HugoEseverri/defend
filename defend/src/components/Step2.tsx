import React from 'react';

interface Step2Props {
    onNext: () => void;
    onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
    return (
        <div className="flex flex-col min-h-[550px] px-13">
            <p className="text-[#5C5C5C] pb-[28px] leading-relaxed font-semibold px-2">
                Vamos a intentar hackearte lo antes posible. Conducimos toda clase de pruebas sobre la superficie de tu empresa, desde pentest convencional, hasta detección de dataleaks, técnicas sociales avanzadas y más...
            </p>

            <h2 className="font-semibold pb-[22px]">Business details:</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la empresa"
                    className="w-full p-2"
                    required
                />

                <input
                    type="text"
                    name="companyWebsite"
                    placeholder="Web de la empresa"
                    className="w-full p-2"
                    required
                />

                <input
                    type="text"
                    name="companySize"
                    placeholder="Tamaño de la empresa"
                    className="w-full p-2"
                    required
                />

                <input
                    type="text"
                    name="languagePreference"
                    placeholder="Preferencia de idioma"
                    className="w-full p-2"
                    required
                />
            </form>

            <div className="flex pt-5">
                <button
                    type="button"
                    className="py-[7px] mr-2 rounded-md bg-gray-300 text-white w-[125px]"
                    onClick={onPrev}
                >
                    Previo
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

export default Step2;
