import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Step4Props {
    onFinish: () => void;
    onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ onFinish, onPrev }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex flex-col justify-between min-h-[600px] space-y-6 w-[400px] p-[20px]">
            <p className="text-gray-600 text-left">
                ¡Listo! Alcanzamos la etapa final, solo queda definir tu password para obtener acceso al sistema
                y nuestra prueba sin cargos. El password debe tener 1 número, 1 letra, 12 caracteres y un símbolo.
            </p>

            <h2 className="text-xl font-bold text-left">Crear un password:</h2>

            <div className="space-y-4">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-md p-2 pr-10"
                        required
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>

                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full border border-gray-300 rounded-md p-2 pr-10"
                        required
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
            </div>

            {/* Botones */}
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
                    onClick={onFinish}
                >
                    Finalizar
                </button>
            </div>

        </div>
    );
};

export default Step4;
