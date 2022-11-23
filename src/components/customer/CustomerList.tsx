import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Customer, getCustomersAsync } from '../../lib/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomerList: FC = () => {

    const { isLoading, error, data } = useQuery({ queryKey: ['customers'], queryFn: getCustomersAsync })

    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (isLoading) return (<p>Loding...</p>)

    return (<>
        <TableContainer sx={{ maxWidth: 720 }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: .1 }}>ID</TableCell>
                        <TableCell sx={{ width: .3 }} align="right">Customer</TableCell>
                        <TableCell sx={{ width: .3 }} align="right">Address</TableCell>
                        <TableCell sx={{ width: .3 }} align="right">Account Manager</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((customer: Customer, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {customer.id.toString()}
                            </TableCell>
                            <TableCell align="right">{customer.name}</TableCell>
                            <TableCell align="right">{customer.address}</TableCell>
                            <TableCell align="right">{customer.accountManager}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}

export default CustomerList