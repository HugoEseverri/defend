// components/IssuesOverview.tsx
import React from 'react';

const issues = [
    {
        date: '29-06-2022',
        title: 'Frameable response, weaponization',
        score: 4,
    },
    {
        date: '24-06-2022',
        title: 'Observable response discrepancy, user enumeration',
        score: 3,
    },
    {
        date: '23-06-2022',
        title: 'Uncontrolled resource consumption',
        score: 2,
    },
    {
        date: '23-06-2022',
        title: 'Information disclosure on error message',
        score: 2,
    },
    {
        date: '23-06-2022',
        title: 'Access information / credentials',
        score: 1,
    },
    {
        date: '23-06-2022',
        title: 'Modification of assumable-immutable data, maid',
        score: 4,
    },
    {
        date: '20-06-2022',
        title: 'User enumeration: blacklisted',
        score: 1,
    },
];

const renderScore = (score: number) => {
    const total = 5;
    const textColor = score >= 3 ? 'text-red-500' : 'text-black';

    return (
        <div className="flex items-center">
            <span className={`mr-2 font-semibold ${textColor}`}>{score}</span>
            <div className="flex">
                {Array.from({ length: total }, (_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full mx-[2px] ${i < score ? 'bg-red-500' : 'border border-red-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

const IssuesOverview = () => {
    return (
        <div className="p-6 w-[848px] bg-white rounded">
            <h2 className="text-xl font-bold mb-4 pl-3">Issues overview</h2>

            <div className="grid grid-cols-[150px_1fr_200px] font-semibold border-b border-gray-300 pb-2 pl-4">
                <div>published</div>
                <div>issue title</div>
                <div>score</div>
            </div>

            {issues.map((issue, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[150px_1fr_200px] py-2 border-b border-gray-300 text-[16.5px] hover:bg-red-100 transition-colors duration-200 pl-4"
                >
                    <div>{issue.date}</div>
                    <div>{issue.title}</div>
                    <div>{renderScore(issue.score)}</div>
                </div>
            ))}
        </div>
    );
};

export default IssuesOverview;
