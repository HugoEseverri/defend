// Home.tsx
import React from 'react';
import Row2 from '../Row2/page'; // Ajusta la ruta si es necesario
import Row3 from '../Row3/page'; // Ajusta la ruta si es necesario
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
    return (
        <div className="flex gap-4 p-4">
            {/* Columna izquierda */}
            <div>
                <Navbar/>
            </div>
            <div className="w-[850px]">
                <Row2 />
            </div>

            {/* Columna derecha */}
            <div className="w-[500px]">
                <Row3 />
            </div>
        </div>
    );
};

export default Home;
