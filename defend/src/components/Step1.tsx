import React from 'react';

interface Step1Props {
    onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    return (
        <div className="flex flex-col justify-between min-h-[600px] space-y-6 w-[400px] p-[20px]">
            <p className="text-gray-700">
                Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infraestructura, empleando una red de hackers descentralizada especializados en diversas áreas.
            </p>

            <h2 className="text-xl font-semibold">Personal Details:</h2>

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
                        className="w-[100px] border-y-1 border-r-1 p-2"
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
                        placeholder="Phone Number"
                        className="flex-1 p-2"
                        required
                    />
                </div>
                <div className="flex justify-end pt-6">
                    <button
                        type="button"
                        className="px-6 py-2 rounded-md bg-red-400 text-white"
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
