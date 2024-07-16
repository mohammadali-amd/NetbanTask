import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = ({ data }) => {
   const chartData = {
      labels: Array(data.length).fill(''),
      datasets: [
         {
            data: data,
            backgroundColor: '#2e7ce2',
            borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 },
            borderSkipped: 'bottom',
         },
      ],
   };

   const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: {
            display: false,
         },
         tooltip: {
            enabled: false,
         },
      },
      scales: {
         x: {
            display: false,
            grid: { display: false },
            barPercentage: 0.5,
            categoryPercentage: 0.5,
         },
         y: {
            display: false,
            grid: { display: false },
         },
      },
      layout: {
         padding: 0
      },
   };

   return (
      <div style={{ width: '50px', height: '40px' }}>
         <Bar data={chartData} options={options} />
      </div>
   )
};

BarChart.propTypes = {
   data: PropTypes.array.isRequired,
};

export default BarChart;
