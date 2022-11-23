import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TransactionList from '../../components/transaction/TransactionList';

const TransactionsPage = () => {
    return(<>
        <Box>
            <Typography variant="h4" gutterBottom>Transaction Management</Typography>
        </Box>
        <TransactionList />
    </>)
}

export default TransactionsPage