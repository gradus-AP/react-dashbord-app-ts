import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Transaction, getTransactionsAsync } from '../../lib/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TransactionList: FC = () => {

    const { isLoading, error, data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactionsAsync })

    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (isLoading) return (<p>Loding...</p>)

    return (<>
        <TableContainer sx={{ maxWidth: 720 }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: .1 }}>ID</TableCell>
                        <TableCell sx={{ width: .25 }} align="right">Customer</TableCell>
                        <TableCell sx={{ width: .25 }} align="right">Account Manager</TableCell>
                        <TableCell sx={{ width: .2 }} align="right">Date</TableCell>
                        <TableCell sx={{ width: .2 }} align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((transaction: Transaction, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {transaction.id.toString()}
                            </TableCell>
                            <TableCell align="right">{transaction.customer.name}</TableCell>
                            <TableCell align="right">{transaction.customer.accountManager}</TableCell>
                            <TableCell align="right">{transaction.orderDate}</TableCell>
                            <TableCell align="right">{transaction.orderPrice.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}

export default TransactionList