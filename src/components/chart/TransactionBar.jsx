import { FC, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Customer, getTransactionsAsync } from '../../lib/api'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ChartData, ChartOptions } from 'chart.js';
import { customers } from '../../mock/data';
import { ChartContext } from '../../contexts/ChartContextProvider';
import { getDays } from '../../lib/dateRange';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options: ChartOptions<'bar'> = {
    plugins: {
        title: {
            display: false,
            text: 'Sales trends'
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true
        }
    }
}

const TransactionBarChart: FC = () => {
    const { dateRange } = useContext(ChartContext)
    const { isLoading, error, data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactionsAsync })

    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (isLoading) return (<p>Loding...</p>)

    const labels = getDays(dateRange.start, dateRange.end).map((date) => date.format('YYYY-MM-DD'))

    const datasets = []
    const bgColors = ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(53, 162, 235)', 'rgb(40, 100, 235)']
    for (const customer of customers) {
        const items = data?.filter(item => item.customer.id === customer.id)
        datasets.push({
            label: customer.name,
            data: labels.map(label => {
                const item = items?.find(record => record.orderDate === label)
                return item ? item.orderPrice : 0
            }),
            backgroundColor: bgColors[customer.id]
        })
    }

    const plotData: ChartData<'bar'> = {
        labels: labels,
        datasets: datasets
    }

    return (<>
        <Typography variant="h5" gutterBottom>Sales trends</Typography>
        <Box sx={{ width: 960, height: 720 }}>
            <Bar data={plotData} options={options} />
        </Box>
    </>)
}

export default TransactionBarChart

