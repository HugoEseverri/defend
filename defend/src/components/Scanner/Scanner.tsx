import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

interface Progress {
    progress: number;
}

function Scanner({ progress }: Progress) {
    return (
        <div className='bg-white w-[500px] h-[195px] p-6 rounded'>
            <h2 className="font-semibold">Scanneo en curso</h2>
            <p className='pt-3'>Los scanners automáticos están analizando uno de sus recursos web: <strong>www.lanacion.com</strong></p>
            <div className='pt-8'>
                <ProgressBar progress={progress} />
            </div>
        </div>
    );
}

export default Scanner;
