import React, { useState } from 'react';
import { useUserStore } from '@/store/useUserStore';

interface Step1Props {
    onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [phone, setPhone] = useState('');

    const setPartialUser = useUserStore((state) => state.setPartialUser);

    const handleNext = () => {
        // Guarda solo nombre completo y email en el store
        setPartialUser({ name: `${firstName} ${lastName}`, email });
        onNext();
    };

    return (
        <div className="flex flex-col min-h-[550px] px-13">
            <p className="text-[#5C5C5C] pb-[28px] font-medium leading-relaxed px-2">
                Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infraestructura, empleando una red de hackers descentralizada especializados en diversas áreas.
            </p>

            <h2 className="font-semibold pb-[22px]">Personal Details:</h2>

            <form className="space-y-3">
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Professional Email"
                    className="w-full p-2 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                    required
                />
                <div className="flex">
                    <select
                        name="countryCode"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        className="flex-1 py-2 px-4 caret-red-500 border border-transparent focus:border-red-500 focus:outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex justify-end mt-9">
                    <button
                        type="button"
                        className="py-[7px] rounded-md bg-red-400 text-white w-[185px] h-[47px] mr-3"
                        onClick={handleNext}
                    >
                        Próximo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step1;
