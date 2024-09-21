import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, BarElement, Title, registerables } from 'chart.js';

Chart.register(...registerables, LinearScale, BarElement, Title);

interface ExpenseIncomeChartProps {
    data: {
        income: number;
        expenses: number;
    };
}

const ExpenseIncomeChart: React.FC<ExpenseIncomeChartProps> = ({ data }) => {
    const chartRef = useRef<any>(null);

    const chartData = {
        labels: ["Receitas", "Despesas"],
        datasets: [
            {
                label: '',
                data: [data.income, data.expenses],
                backgroundColor: ["#4caf50", "#f44336"],
                borderColor: ["#388e3c", "#c62828"],
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current;
            const ctx = chartInstance.ctx;

            if (ctx) {
                const gradientGreen = ctx.createLinearGradient(0, 0, 0, 100);
                gradientGreen.addColorStop(0, 'rgba(0,80,20,0.9)');
                gradientGreen.addColorStop(1, 'rgba(48,198,78,0.5)');

                const gradientRed = ctx.createLinearGradient(0, 0, 0, 100);
                gradientRed.addColorStop(0, 'rgba(250,0,0,0.9)');
                gradientRed.addColorStop(1, 'rgba(233,117,117,0.5)');

                chartInstance.data.datasets[0].backgroundColor[0] = gradientGreen;
                chartInstance.data.datasets[0].backgroundColor[1] = gradientRed;

                chartInstance.update();
            }
        }
    }, [data]);

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Bar
            data={chartData}
            options={options}
            className="chart-canvas"
            ref={chartRef}
        />
    );
};

export default ExpenseIncomeChart;
