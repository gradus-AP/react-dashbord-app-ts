import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Transaction, getTransactionsAsync } from '../../lib/api'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

const TransactionItems: FC<{ currentItems: Transaction[] | undefined }> = ({ currentItems }) => {
    return (<TableBody>
        {currentItems?.map((transaction: Transaction, index) => (
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
    </TableBody>)
}

const TransactionList: FC = () => {

    const [itemOffset, setItemOffset] = useState(0);
    const { isLoading, error, data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactionsAsync })

    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (isLoading) return (<p>Loding...</p>)

    const itemsPerPage = 20
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data!.length / itemsPerPage);

    const handlePageClick = (event: any, page: number) => {
        const newOffset = ((page - 1) * itemsPerPage) % (data ?? []).length;
        setItemOffset(newOffset);
    };

    return (<>
        <Box sx={{ maxWidth: 720 }}>
            <Box sx={{ m: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination count={pageCount} shape="rounded" onChange={handlePageClick} />
            </Box>
            <TableContainer component={Paper}>
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
                    <TransactionItems currentItems={currentItems} />
                </Table>
            </TableContainer>
        </Box>
    </>
    );
}

export default TransactionList