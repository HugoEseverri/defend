import React from 'react';

interface Step1Props {
    onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    return (
        <div className="space-y-6">
            <p className="text-gray-700">
                Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infraestructura, empleando una red de hackers descentralizada especializados en diversas áreas.
            </p>

            <h2 className="text-xl font-semibold">Personal Details:</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Professional Email"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />

                <div className="flex">
                    <select
                        name="countryCode"
                        className="w-[120px] border border-gray-300 rounded-l-md p-2"
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
                        className="flex-1 border border-l-0 border-gray-300 rounded-r-md p-2"
                        required
                    />
                </div>
                <div className="flex justify-end pt-6">
                    <button
                        type="button"
                        className="px-6 py-2 rounded-md bg-red-600 text-white"
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
