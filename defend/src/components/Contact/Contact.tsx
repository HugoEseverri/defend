import React from 'react'

function Contact() {
    return (
        <div className='bg-white w-[420px] h-[270px] p-7 rounded flex'>
            <div className='flex flex-col mr-15'>
                <h2 className='font-semibold text-[19px]'>Email</h2>
                <ul className='text-[16.5px] space-y-3 mt-4'>
                    <li>chris@codefend.com</li>
                    <li>edd@codefend.com</li>
                    <li>hernan@codefend.com</li>
                    <li>nacho@codefend.com</li>
                </ul>
            </div>
            <div className='flex flex-col mr-5'>
                <h2 className='font-semibold text-[19px]'>Member role</h2>
                <ul className='text-[16.5px] space-y-3 mt-4'>
                    <li>Founder</li>
                    <li>Collaborator</li>
                    <li>Collaborator</li> 
                    <li>Collaborator</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact