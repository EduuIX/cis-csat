import React from 'react';
import './policyBarGraph.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PolicyBarGraph: React.FC = () => {
    // Definindo os dados do gráfico
    const data: ChartData<'bar'> = {
        labels: [
            'All Policies Defined',
            'Controls 1-6 Implemented',
            'All Controls Implemented',
            'All Controls Automated',
            'All Controls Reported',
            'Maturity Rating'
        ],
        datasets: [
            {
                label: 'Scores',
                data: [65, 59, 90, 81, 56, 72],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Definindo as opções do gráfico
    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='policy-bar-graph'>
            <h3>MATURITY LEVEL AVERAGE SCORES</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export { PolicyBarGraph };
