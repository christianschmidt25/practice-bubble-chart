import React from 'react';
import { useState } from 'react';
import { Bubble } from '/node_modules/react-chartjs-2';
import './App.css'

const [chartData, setChartData] = useState(null);

const BubblePlot = ({ data }) => {
  const chartData = {
    labels: ["Expenses", "Profits"],
    datasets: [
      {
        label: "Expenses, Profits, and Sales",
        data: {
          "x": [data.expenses],
          "y": [data.profits],
          "size": [data.sales]
        },
        backgroundColor: ["red", "blue", "green"]
      }
    ]
  }
  useEffect(() => {
    fetch('/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign:'center' }}>
      <h1>Bubble Plot</h1>
      <BubblePlot data={chartData} />
    </div>
  );

}

export default BubblePlot
