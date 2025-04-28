import React from 'react';

interface ProgressBarProps {
    step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
    return (
        <div className="flex items-center w-full">
            <div
                className={`flex-1 h-[2px] ${step > 0 ? "bg-red-400" : "bg-gray-100"}`}
            />
            {Array.from({ length: 4 }).map((_, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`w-[10px] h-[10px] rounded-full border-2 
                            ${index < step - 1 ? "border-red-400 bg-red-400" :
                                index === step - 1 ? "border-red-400 bg-white" :
                                    "border-gray-100 bg-white"} 
                            mx-[2px]`}
                    />
                    {index < 3 && (
                        <div
                            className={`flex-1 h-[2px] ${index < step - 1 ? "bg-red-400" : "bg-gray-100"}`}
                        />
                    )}
                </React.Fragment>
            ))}
            <div
                className={`flex-1 h-[2px] ${step < 4 ? "bg-gray-100" : "bg-gray-100"}`}
            />
        </div>
    );
};

export default ProgressBar;