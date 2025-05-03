import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const chartData = {
        labels: ['intel', 'low', 'medium', 'elevated', 'critical'],
        datasets: [
            {
                data: [60, 20, 10, 5, 5],
                backgroundColor: [
                    '#EF4444',
                    '#F87171',
                    '#FCA5A5',
                    '#FECACA',
                    '#FEE2E2',
                ],
                borderWidth: 0,
            },
        ],
    };

    const chartOptions = {
        cutout: '60%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const value = context.parsed;
                        const label = context.label;
                        const total = context.dataset.data.reduce(
                            (sum: number, val: number) => sum + val,
                            0
                        );
                        const percentage = ((value / total) * 100).toFixed(0);
                        return `${percentage}% ${label}`;
                    },
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="w-[200px] h-[200px]">
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};


export default DoughnutChart;
