import { useEffect, useRef, useState } from 'react';

interface RadarPoint {
    x: number;
    y: number;
    originalX: number;
    originalY: number;
    opacity: number;
    detected: boolean;
    rotation: number;
    img: HTMLImageElement;
}

const SIZE = 225;

const generatePoissonPoint = (
    centerX: number,
    centerY: number,
    maxRadius: number,
    minRadius: number
): { x: number; y: number } => {
    const angle = Math.random() * Math.PI * 2;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
    };
};

const generateDistributedPoints = (
    count: number,
    centerX: number,
    centerY: number
): RadarPoint[] => {
    const points: RadarPoint[] = [];
    const minRadius = SIZE * 0.2;
    const maxRadius = SIZE * 0.4;
    const minDistance = SIZE * 0.2;
    const maxAttempts = 100;
    const maxGlobalAttempts = count * maxAttempts * 2;
    let globalAttempts = 0;

    const isValidPoint = (x: number, y: number): boolean => {
        const minDistSq = minDistance * minDistance;
        return points.every(p => {
            const dx = p.x - x;
            const dy = p.y - y;
            return dx * dx + dy * dy >= minDistSq;
        });
    };

    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let point: { x: number; y: number } | undefined;

        while (attempts < maxAttempts && !point) {
            const candidate = generatePoissonPoint(centerX, centerY, maxRadius, minRadius);
            if (isValidPoint(candidate.x, candidate.y)) {
                point = candidate;
            }
            attempts++;
            globalAttempts++;

            if (attempts > maxAttempts * 0.8 && i > count * 0.5) {
                const relaxed = minDistance * 0.85;
                const relaxedSq = relaxed * relaxed;
                if (
                    points.every(p => {
                        const dx = p.x - candidate.x;
                        const dy = p.y - candidate.y;
                        return dx * dx + dy * dy >= relaxedSq;
                    })
                ) {
                    point = candidate;
                }
            }
        }

        if (point) {
            const img = new Image();
            img.src = `/Bichardo-${(i % 3) + 1}.png`; // Aquí se elige entre Bichardo-1, Bichardo-2 y Bichardo-3
            points.push({
                x: point.x,
                y: point.y,
                originalX: point.x,
                originalY: point.y,
                opacity: 1,
                detected: false,
                rotation: Math.random() * 360,
                img,
            });
        } else {
            i--;
            if (globalAttempts > maxGlobalAttempts * 0.9) break;
        }
    }

    return points;
};

export default function RadarScanner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const angle = useRef(0);
    const [points, setPoints] = useState<RadarPoint[]>([]);

    useEffect(() => {
        const clientPoints = generateDistributedPoints(3, SIZE / 2, SIZE / 2);
        setPoints(clientPoints);
    }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = SIZE;
        canvas.height = SIZE;

        const centerX = SIZE / 2;
        const centerY = SIZE / 2;

        const draw = () => {
            ctx.clearRect(0, 0, SIZE, SIZE);

            // Grid
            const gridSize = 20;
            ctx.strokeStyle = 'rgba(255,48,48,0.12)';
            ctx.lineWidth = 0.5;
            for (let x = 0; x <= SIZE; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, SIZE);
                ctx.stroke();
            }
            for (let y = 0; y <= SIZE; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(SIZE, y);
                ctx.stroke();
            }

            // Crosshair
            const verticalGradient = ctx.createLinearGradient(centerX, 0, centerX, SIZE);
            verticalGradient.addColorStop(0, 'rgba(255, 48, 48, 0)');
            verticalGradient.addColorStop(0.5, 'rgba(255, 48, 48, 0.8)');
            verticalGradient.addColorStop(1, 'rgba(255, 48, 48, 0)');

            ctx.beginPath();
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, SIZE);
            ctx.strokeStyle = verticalGradient;
            ctx.stroke();

            const horizontalGradient = ctx.createLinearGradient(0, centerY, SIZE, centerY);
            horizontalGradient.addColorStop(0, 'rgba(255, 48, 48, 0)');
            horizontalGradient.addColorStop(0.5, 'rgba(255, 48, 48, 0.8)');
            horizontalGradient.addColorStop(1, 'rgba(255, 48, 48, 0)');

            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(SIZE, centerY);
            ctx.strokeStyle = horizontalGradient;
            ctx.stroke();

            // Scanning cone
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle.current);
            const coneAngle = Math.PI / 8;
            const coneGradient = ctx.createConicGradient(-coneAngle, 0, 0);
            coneGradient.addColorStop(0, 'rgba(255, 48, 48, 0)');
            coneGradient.addColorStop(0.5, 'rgba(255, 48, 48, 1)');
            coneGradient.addColorStop(1, 'rgba(255, 48, 48, 0)');

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, SIZE / 2, -coneAngle, coneAngle);
            ctx.closePath();
            ctx.fillStyle = coneGradient;
            ctx.fill();
            ctx.restore();

            // Radar rings
            const rings = [
                { radius: SIZE * 0.11, opacity: 0.6 },
                { radius: SIZE * 0.22, opacity: 0.5 },
                { radius: SIZE * 0.31, opacity: 0.4 },
                { radius: SIZE * 0.42, opacity: 0.15 },
            ];

            rings.forEach(r => {
                ctx.beginPath();
                ctx.arc(centerX, centerY, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 60, 35, ${r.opacity})`;
                ctx.stroke();
            });

            // Draw images (bugs) in their positions
            points.forEach(point => {
                if (point.img.complete) {
                    ctx.save();
                    ctx.translate(point.x, point.y);
                    ctx.rotate(point.rotation);
                    ctx.drawImage(
                        point.img,
                        -point.img.width / 2,  // Centrado de la imagen
                        -point.img.height / 2  // Centrado de la imagen
                    );
                    ctx.restore();
                }
            });

            angle.current += 0.02;
            requestAnimationFrame(draw);
        };

        draw();
    }, [points]);

    return (
        <div className="flex items-center justify-center">
            <canvas
                ref={canvasRef}
                className="rounded-full border border-red-400 shadow-[0_0_20px_rgba(255,48,48,0.5)]"
            />
        </div>
    );
}
