import React from 'react';
import './radarGraph.css'
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarGraph: React.FC = () => {
  // Definindo os dados do gráfico
  const data: ChartData<'radar'> = {
    labels: [
      'CIS C01', 'CIS C02', 'CIS C03', 'CIS C04', 'CIS C05',
      'CIS C06', 'CIS C07', 'CIS C08', 'CIS C09', 'CIS C10',
      'CIS C11', 'CIS C12', 'CIS C13', 'CIS C14', 'CIS C15',
      'CIS C16', 'CIS C17', 'CIS C18'
    ],
    datasets: [
      {
        label: 'Your Assessment',
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
  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false, // Adicione esta linha
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className='radar-graph'>
      <p>SPIDER WEB</p>
      <Radar data={data} options={options} />
    </div>
  );
};

export { RadarGraph };
