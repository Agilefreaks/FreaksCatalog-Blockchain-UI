import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  PieController,
  Decimation,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  ArcElement,
  PieController,
  Decimation,
  Tooltip,
  Legend,
);

function toPercentage(ethValue) {
  // smart contract can't hold float so I have to divide by 10
  return ethValue / 10;
}

function ProfitPie({ freaks }) {
  const labels = freaks.map(({ name }) => name);
  const values = freaks.map(({ share }) => toPercentage(share));

  function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${ r }, ${ g }, ${ b })`;
  }

  const data = {
    type: 'pie',
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map(generateRandomColor),
      },
    ],
  };

  return (
    <div>
      { freaks.length > 0 && <Pie data={ data } /> }
    </div>
  );
}

const freakShape = {
  name: PropTypes.string,
  share: PropTypes.number,
};

ProfitPie.propTypes = {
  freaks: PropTypes.arrayOf(PropTypes.shape(freakShape)).isRequired,
};

export default ProfitPie;
