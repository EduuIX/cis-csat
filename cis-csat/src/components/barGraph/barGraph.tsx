import React from 'react';
import './barGraph.css';
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

const BarGraph: React.FC = () => {
    // Definindo os dados do gráfico
    const data: ChartData<'bar'> = {
        labels: [
            'CIS C01', 'CIS C02', 'CIS C03', 'CIS C04', 'CIS C05',
            'CIS C06', 'CIS C07', 'CIS C08', 'CIS C09', 'CIS C10',
            'CIS C11', 'CIS C12', 'CIS C13', 'CIS C14', 'CIS C15',
            'CIS C16', 'CIS C17', 'CIS C18'
        ],
        datasets: [
            {
                label: 'Organization Score',
                data: [65, 59, 90, 81, 56, 55, 40, 45, 72, 60, 80, 90, 70, 85, 55, 50, 65, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Industry Average',
                data: [28, 48, 40, 19, 96, 27, 100, 50, 30, 45, 70, 80, 60, 75, 65, 55, 60, 85],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
                position: 'bottom',
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
        <div className='bar-graph'>
            <p>MONTHLY GRAPH</p>
            <Bar data={data} options={options} />
        </div>
    );
};

export { BarGraph };
