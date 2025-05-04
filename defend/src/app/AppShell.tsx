'use client'

import { useUserStore } from '@/store/useUserStore'
import Onboarding from '@/components/Onboarding/Onboarding'
import Home from './Home/page'
import NavUser from '@/components/NavUser/NavUser'

export default function AppShell() {
    const showOnboarding = useUserStore((state) => state.showOnboarding)
    const setShowOnboarding = useUserStore((state) => state.setShowOnboarding);

    const handleClose = () => {
        setShowOnboarding(false);
        console.log('Modal cerrado');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado');
        handleClose();
    };

    return (
        <div className="relative min-h-screen">
            {!showOnboarding && <NavUser />}

            <div className={showOnboarding ? 'blur-sm pointer-events-none' : ''}>
                <Home />
            </div>

            {showOnboarding && (
                <div className="fixed inset-0 flex justify-center items-center bg-opacity-40 z-50">
                    <Onboarding onClose={handleClose} onSubmit={handleSubmit} />
                </div>
            )}
        </div>
    )
}
