import React from 'react';
import DoughnutChart from './DoughnutChart ';

function Chart2() {
  const data = {
    datasets: [{
      data: [40,60],
      backgroundColor: ['lightgrey',  'lightblue'],
    }]
  };

  return <DoughnutChart data={data} />;
}

export default Chart2;