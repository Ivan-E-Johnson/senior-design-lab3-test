import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import Chart from 'chart.js/auto';


// export  function generateRandomData(numLabels) {
//     const labels = [];
//     const Completed = [];
//     const Active = [];
//     const Timeout = [];
  
//     for (let i = 1; i <= numLabels; i++) {
//       labels.push(`Label ${i}`);
//       Completed.push(Math.floor(Math.random() * 100));
//       Active.push(Math.floor(Math.random() * 100));
//       Timeout.push(Math.floor(Math.random() * 100));
//     }
  
//     return {
//       labels,
//       Completed,
//       Active,
//       Timeout,
//     };
//   }

const BarGraph = forwardRef(({ data }, ref) => {
  const canvasRef = useRef();
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (data && chart) {
      chart.data.labels = data.labels;
      chart.data.datasets[0].data = data.Completed;
      chart.data.datasets[1].data = data.Active;
      chart.data.datasets[2].data = data.Timeout;
      chart.update();
    } else if (data) {
      const ctx = canvasRef.current.getContext('2d');
      const chartData = {
        labels: data.labels,
        datasets: [
          {
            label: `Completed (${data.Completed.reduce((a, b) => a + b)})`,
            data: data.Completed,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: `Active (${data.Active.reduce((a, b) => a + b)})`,
            data: data.Active,
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
          },
          {
            label: `Timeout (${data.Timeout.reduce((a, b) => a + b)})`,
            data: data.Timeout,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 16,
                },
              },
            },
          },
          scales: {
            x: {
              stacked: true,
              title: {
                display: true,
                text: 'Number of Nodes'
              },

            },
            y: {
              stacked: true,
              title: {
                display: true,
                text: 'Number of Games'
              }
            },
          },
        },
      });
      setChart(newChart);
    }
  }, [data, chart]);

  // useImperativeHandle allows the parent component to call methods of the BarGraph component
  useImperativeHandle(ref, () => ({
    // Define any methods you want to expose to the parent component
    // In this case, we expose the chart reference
    chart,
  }));

  return <canvas ref={canvasRef} />;
});

export default BarGraph;
