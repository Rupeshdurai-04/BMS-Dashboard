import React from 'react';
import './PieChart.css';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['Repair & Maintenance', 'Others', 'Scheduled', 'Unresolved'],
    datasets: [
      {
        label: '# of Cases',
        data: [76, 10, 10, 4],
        backgroundColor: ['#3d74f2', '#f84f4f', '#46c46f', '#fcd14b'],
        hoverOffset: 5,
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
        callbacks: {
          label: function (tooltipItem) {
            const label = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart">
      <div className="pie-chart-header-title">
        <h3>Cases Graph</h3>
        <div className="dropdown-container">
          <select className="dropdown-pie">
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
