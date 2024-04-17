import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

const MyScatterPlot = ({ data }) => {
    
    const transformedData = {
        datasets: [
            {
                label: 'UMAP Scatter Plot',
                data: data?.map(d => ({
                    x: d.UMAP1,
                    y: d.UMAP2,
                })),
                backgroundColor: 'rgba(255, 98, 132, 0.5)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'UMAP1',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'UMAP2',
                },
            },
        },
        plugins: {
            legend: {
                display: false, 
            },
        },
    };

    return <Scatter data={transformedData} options={options} />;
};

export default MyScatterPlot;
