import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import RowIssues1 from '../RowIssues1/page';
import RowIssues2 from '../RowIssues2/page';

const HomeIssues = () => {
    return (
        <div className="flex gap-4 p-4">
            <div>
                <Navbar/>
            </div>
            <div className="w-[850px]">
                <RowIssues1 />
            </div>
            <div className="w-[500px]">
                <RowIssues2 />
            </div>
        </div>
    );
};

export default HomeIssues;
