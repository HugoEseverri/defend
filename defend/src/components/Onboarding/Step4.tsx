import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useUserStore } from '@/store/useUserStore';

interface Step4Props {
    onFinish: () => void;
    onPrev: () => void;
    onClose: () => void;
}

const Step4: React.FC<Step4Props> = ({ onFinish, onPrev, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPasswordInput] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const setPassword = useUserStore((state) => state.setPassword);

    const handleFinish = () => {
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        setPassword(password);
        onClose();
        onFinish();
    };

    return (
        <div className="flex flex-col h-[550px] px-7">
            <p className="text-[#5C5C5C] mb-[54px] leading-relaxed font-medium">
                ¡Listo! Alcanzamos la etapa final, solo queda definir tu password para obtener acceso al sistema
                y nuestra prueba sin cargos. El password debe tener 1 número, 1 letra, 12 caracteres y un símbolo.
            </p>
            <h2 className="font-semibold pb-[22px]">Crear un password:</h2>
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 pr-10"
                        value={password}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        required
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaEyeSlash className="text-gray-500" />
                        ) : (
                            <FaEye className="text-gray-400" />
                        )}
                    </div>
                </div>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirmar password"
                        className="w-full p-2 pr-10"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? (
                            <FaEyeSlash className="text-gray-500" />
                        ) : (
                            <FaEye className="text-gray-400" />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-[143.5px] mr-[2px]">
                
                <button
                    type="submit"
                    className="rounded-md bg-red-400 text-white w-[185px] h-[46px]"
                    onClick={handleFinish}
                >
                    Finalizar
                </button>
            </div>
        </div>
    );
};

export default Step4;
