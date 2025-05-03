
import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-[450px] h-4 bg-red-300 overflow-hidden">
            <div
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
