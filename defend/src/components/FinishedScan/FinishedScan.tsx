// components/IssuesOverview.tsx
import React from 'react';

const issues = [
    {
        date: '29-06-2022',
        domain: 'lanacion.com',
        score: 20,
    },
    {
        date: '24-06-2022',
        domain: 'infobae.com',
        score: 30,
    },
    {
        date: '23-06-2022',
        domain: 'clarin.com',
        score: 40,
    },
];


const FinishedScan = () => {
    return (
        <div className="p-6 w-[500px] bg-white rounded">
            <h2 className="text-xl font-bold mb-4 pl-3">Issues overview</h2>
            <p className='pl-3 mb-4'>Actualmente no hay scanners automáticos en curso</p>

            <div className="grid grid-cols-[150px_1fr_100px] font-semibold border-b border-gray-200 pb-2 pl-4">
                <div>date</div>
                <div>domain</div>
                <div>total issues</div>
            </div>

            {issues.map((issue, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[150px_1fr_100px] py-2 border-b border-gray-200 text-[16.5px] hover:bg-red-100 transition-colors duration-200 pl-4"
                >
                    <div>{issue.date}</div>
                    <div>{issue.domain}</div> 
                    <div>{issue.score}</div>
                </div>
            ))}
        </div>
    );
};

export default FinishedScan;
