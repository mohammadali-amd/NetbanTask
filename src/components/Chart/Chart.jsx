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
         },
         y: {
            display: false,
         },
      },
      layout: {
         padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
         },
      },
   };

   return (
      <div style={{ width: '100px', height: '50px' }}>
         <Bar data={chartData} options={options} />
      </div>
   )
};

BarChart.propTypes = {
   data: PropTypes.array.isRequired,
};

export default BarChart;
