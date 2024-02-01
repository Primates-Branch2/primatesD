import React from 'react';
import DoughnutChart from './DoughnutChart ';

function Chart() {
  const data = {
    datasets: [{
      data: [80, 20],
      backgroundColor: ['lightgreen',  'lightgrey'],
    }]
  };

  return <DoughnutChart data={data} />;
}

export default Chart;