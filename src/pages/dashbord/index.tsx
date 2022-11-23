import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DateRangePicker from '../../components/datepicker/DateRangePicker';
import SalesCard from './SalesCard';
import TransactionBarChart from '../../components/chart/TransactionBar';
import { ChartContextProvider } from '../../contexts/ChartContextProvider';



const DashbordPage = () => {
    return (<>
        <Box>
            <ChartContextProvider>
                <Stack spacing={2} direction="row" justifyContent="space-between" mb={2}>
                    <Typography variant="h4" gutterBottom>Dashbord</Typography>
                    <DateRangePicker />
                </Stack>
                <Stack spacing={2} direction="row" justifyContent="space-between" mb={6}>
                    <SalesCard/>
                </Stack>
                <TransactionBarChart />
            </ChartContextProvider>
        </Box>
    </>)
}

export default DashbordPage
