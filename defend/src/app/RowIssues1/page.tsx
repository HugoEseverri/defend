import React from 'react'
import Resources from '@/components/Resources/Resources'
import Colaborators from '@/components/Colaborators/Colaborators'
import Contact from '@/components/Contact/Contact'
import IssuesOverview from '@/components/IssuesOverview/IssuesOverview'

function RowIssues1() {
    return (
        <div className='w-[848px]'>
            <div className="mb-4">
                <IssuesOverview/>
            </div>
            <div className="mb-4">
                <Resources />
            </div>
            <div className="flex justify-center gap-2">
                <div className="w-[420px]">
                    <Colaborators />
                </div>
                <div className="w-[420px]">
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default RowIssues1