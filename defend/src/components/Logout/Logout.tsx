import React from "react";

interface LogoutProps {
    onCancel: () => void;
    onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onCancel, onLogout }) => {
    return (
        <div className="w-89 h-[150px] bg-white p-6 rounded-md shadow-lg text-center">
            <h4 className="text-[16.5px] font-bold text-gray-700 mb-7">
            ARE YOU SURE YOU WANT TO LOGOUT?
            </h4>
            <div className="flex justify-center space-x-4 text-[15px]">
                <button
                    className=" w-[85px] py-2 text-white bg-black rounded-sm hover:bg-gray-800"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="w-[100px] py-2 text-white bg-red-400 rounded-sm hover:bg-red-700"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Logout;
