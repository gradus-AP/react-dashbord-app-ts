import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomerList from '../../components/customer/CustomerList';

const CustomersPage = () => {
    return (<>
        <Box>
            <Typography variant="h4" gutterBottom>Customer Management</Typography>
        </Box>
        <CustomerList />
    </>)
}

export default CustomersPage