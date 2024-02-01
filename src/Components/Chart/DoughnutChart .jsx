import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ data }) {
  const chartRef = React.createRef();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          // You can add options here
        }
      });
    }
  }, [chartRef, data]);

  return (
    <canvas ref={chartRef}  />
  );
}

export default DoughnutChart;