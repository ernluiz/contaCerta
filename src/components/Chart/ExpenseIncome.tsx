import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, BarElement, CategoryScale, Title } from 'chart.js';

// Registrar escalas e elementos
Chart.register(CategoryScale, LinearScale, BarElement, Title);

interface ChartData {
    income: number;
    expenses: number;
}

interface ExpenseIncomeChartProps {
    data: ChartData;
}

const ExpenseIncomeChart: React.FC<ExpenseIncomeChartProps> = ({ data }) => {
    const chartData = {
        labels: ["Receitas", "Despesas"],
        datasets: [
            {
                label: "Total",
                data: [data.income, data.expenses],
                backgroundColor: ["#4caf50", "#f44336"], // Cores para receitas e despesas
                borderColor: ["#388e3c", "#c62828"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default ExpenseIncomeChart;
