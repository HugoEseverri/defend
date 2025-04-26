import React from "react";

type OnboardingProps = {
    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};



const Onboarding: React.FC<OnboardingProps> = ({ onClose, onSubmit }) => {
    const currentStep = 1;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[450px]">

                <h1 className="text-xl font-bold mb-2 text-gray-900">Nuevo Usuario</h1>

                <div className="flex items-center mb-6 w-full">

                    <div className={`flex-1 h-1 mx-2 ${currentStep > 0 ? "bg-red-600" : "bg-gray-300"}`} />

                    {Array.from({ length: 4 }).map((_, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={`w-4 h-4 rounded-full ${index < currentStep ? "bg-red-600" : "bg-gray-300"}`}
                            />

                            {index < 3 && (
                                <div
                                    className={`flex-1 h-1 mx-2 ${index + 1 < currentStep ? "bg-red-600" : "bg-gray-300"}`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                    <div className="flex-1 h-1 bg-gray-300 mx-2" />
                </div>



                <p className="text-gray-700 mb-6">
                    Bienvenido. Codefend es una plataforma completa para pentest continuo, detección
                    temprana de amenazas, y protección de assets e infrastructura, empleando una red de
                    hackers decentralizada especializados en diversas áreas.
                </p>

                <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Details:</h2>

                <form className="space-y-4 flex flex-col" onSubmit={onSubmit} >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Professional email"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />

                    <div className="flex">
                        <select
                            name="countryCode"
                            className="w-[100px] border border-gray-300 rounded-md p-2 rounded-r-none"
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
                            className="flex-1 border border-gray-300 rounded-md p-2 rounded-l-none"
                            required
                        />
                    </div>


                    <div className="flex justify-between pt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Próximo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Onboarding;
