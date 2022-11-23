import { FC, useContext } from 'react'
import { getSalesAmount } from '../../lib/api'
import Box from '@mui/material/Box';
import { ChartContext } from '../../contexts/ChartContextProvider';
import Card from '../../components/common/Card';

const Content: FC = () => {

    const { dateRange } = useContext(ChartContext)
    const sales = getSalesAmount(dateRange.start, dateRange.end)
    const salesLastWeek = getSalesAmount(dateRange.start!.subtract(7, 'day'), dateRange.end!.subtract(7, 'day'))
    const changeRate = (sales - salesLastWeek) / salesLastWeek

    return (<>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
            {Math.floor(sales / 1000)} K
        </Box>
        <Box
            sx={{
                color: changeRate >= 0 ? 'success.dark' : 'danger.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
            }}
        >
            {changeRate.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })}
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
            vs. last week
        </Box>
    </>)
}

const SalesCard: FC = () => {
    return (<>
        <Card title={'sales'} children={<Content />}></Card>
    </>)
}

export default SalesCard;