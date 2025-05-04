'use client'

import { useUserStore } from '@/store/useUserStore'
import Onboarding from '@/components/Onboarding/Onboarding'
import Onboard from '@/components/Onboard/Onboard'
import Home from './Home/page'
import NavUser from '@/components/NavUser/NavUser'

export default function AppShell() {
    const showOnboarding = useUserStore((state) => state.showOnboarding)
    const showOnboard = useUserStore((state) => state.showOnboard)

    const setShowOnboarding = useUserStore((state) => state.setShowOnboarding)
    const setShowOnboard = useUserStore((state) => state.setShowOnboard)

    const handleSubmitOnboarding = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Onboarding enviado')

        setShowOnboarding(false)
    }

    const handleSubmitOnboard = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Onboard enviado')
        setShowOnboard(false)
    }

    const handleCloseOnboarding = () => {
        setShowOnboarding(false)
    }

    const handleCloseOnboard = () => {
        setShowOnboard(false)
    }

    return (
        <div className="relative min-h-screen ml-9">
            {!showOnboarding && !showOnboard && <NavUser />}

            <div className={(showOnboarding || showOnboard) ? 'pointer-events-none' : ''}>
                <Home />
            </div>

            {showOnboarding && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-[#dfdfdfa4] z-50">
                    <Onboarding onClose={handleCloseOnboarding} onSubmit={handleSubmitOnboarding} />
                </div>
            )}

            {showOnboard && !showOnboarding && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-[#dfdfdfa4] z-50">
                    <Onboard onClose={handleCloseOnboard} onSubmit={handleSubmitOnboard} />
                </div>
            )}
        </div>
    )
}
