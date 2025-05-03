import React from 'react'
import RiskCounter from '@/components/RiskCounter/RiskCounter';
import FinishedScan from '@/components/FinishedScan/FinishedScan';
import IssuesCounterTwo from '@/components/IssuesCounterTwo/IssuesCounterTwo';

function RowIssues2() {
    return (
        <div className='w-[500px]'>
            <div className="mb-4">
                <IssuesCounterTwo />
            </div>
            <div className="mb-4">
                <RiskCounter />
            </div>
            <div className="mb-4">
                <FinishedScan />
            </div>
        </div>
    );
}





export default RowIssues2
