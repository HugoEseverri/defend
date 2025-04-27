import React from 'react';

interface ProgressBarProps {
    step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
    return (
        <div className="flex items-center mb-6 w-[450px]">
            <div
                className={`flex-1 h-1 ${step > 0 ? "bg-red-600" : "bg-gray-300"}`}
            />
            {Array.from({ length: 4 }).map((_, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`w-4 h-4 rounded-full ${index < step ? "bg-red-600" : "bg-gray-300"} mx-2`} // mx-2 agrega un margen entre los círculos
                    />
                    {index < 3 && (
                        <div
                            className={`flex-1 h-1 ${index < step - 1 ? "bg-red-600" : "bg-gray-300"}`}
                        />
                    )}
                </React.Fragment>
            ))}
            <div
                className={`flex-1 h-1 ${step < 4 ? "bg-gray-300" : "bg-gray-300"}`}
            />
        </div>
    );
};

export default ProgressBar;
