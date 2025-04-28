import React from 'react';

interface Step1Props {
    onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    return (
        <div className="flex flex-col min-h-[550px] px-13">
            <p className="text-[#5C5C5C] pb-[28px] font-semibold leading-relaxed">
                Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infraestructura, empleando una red de hackers descentralizada especializados en diversas áreas.
            </p>

            <h2 className="font-semibold pb-[22px]">Personal Details:</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2"
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Professional Email"
                    className="w-full p-2"
                    required
                />

                <div className="flex">
                    <select
                        name="countryCode"
                        className="w-[100px] border-y-1 border-r-1 border-gray-400 p-2"
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
                        className="flex-1 py-2 px-4"
                        required
                    />
                </div>
                <div className="flex justify-end pt-5 ">
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
