import React from 'react';
import './groupBarGraph.css';
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

const GroupBarGraph: React.FC = () => {
    // Definindo os dados do gráfico
    const data: ChartData<'bar'> = {
        labels: ['Grupo 1', 'Grupo 2', 'Grupo 3'],
        datasets: [
            {
                label: 'Scores',
                data: [65, 59, 90],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
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
        <div className='group-bar-graph'>
            <h3>GROUP IMPLEMENTATION AVERAGES</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export { GroupBarGraph };
