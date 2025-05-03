import React from 'react'
import Total from '@/components/Total/Total';
import IssuesCounter from '@/components/IssuesCounter/IssuesCounter';
import RiskCounter from '@/components/RiskCounter/RiskCounter';
import Scanner from '@/components/Scanner/Scanner';

function Row3() {
    return (
        <div className='w-[500px]'>
            <div className="mb-4">
                <IssuesCounter />
            </div>
            <div className="mb-4">
                <RiskCounter />
            </div>
            <div className="mb-4">
                <Scanner progress={60} />
            </div>
            <div className="mb-4">
                <Total />

            </div>
        </div>
    );
}





export default Row3
