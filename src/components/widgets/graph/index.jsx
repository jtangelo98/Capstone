import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 
import { CDBContainer } from 'cdbreact';
import { Container } from 'react-bootstrap';

Chart.register(...registerables);
const Graph = () => {
  const [data] = useState({
    labels: ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'],
    datasets: [
    //   {
    //     label: 'Checking Account',
    //     backgroundColor: 'rgba(194, 116, 161, 0.5)',
    //     borderColor: 'rgb(194, 116, 161)',
    //     data: [214.51, 214.51, 214.51, 214.51, 214.51, 214.51, 214.51, 214.51, 214.51, 214.51],
    //   },
      {
        label: 'Savings Account @ 2.4% APR',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [6425.25, 6579.46, 6737.36, 6899.06, 7064.64, 7234.19, 7407.81, 7585.60, 7767.65, 7954.07],
      },
    ],
  });

  return (
        <CDBContainer className='lineGraph' style = {{backgroundColor: 'rgb(224, 221, 210)' }}>
        <h3 className="mt-5">Savings Interest Projection</h3>
        <Line data={data} options={{ responsive: true }} />
        </CDBContainer>
  );
};

export default Graph;