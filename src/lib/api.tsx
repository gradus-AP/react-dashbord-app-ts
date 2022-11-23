import { customers, transactions } from "../mock/data";
import dayjs, { Dayjs } from 'dayjs';

type Customer = {
    id: Number;
    name: String;
    address: String;
    accountManager: String;
}

type Transaction = {
    id: Number;
    customer: Customer;
    orderDate: String;
    orderPrice: Number;
}

type GetCustomersAsync = () => Promise<Customer[]>

const getCustomersAsync: GetCustomersAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customers)
        }, 3000)
    })
}

type GetTransactionsAsync = () => Promise<Transaction[]>

const getTransactionsAsync: GetTransactionsAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(transactions)
        }, 3000)
    })
}

type GetSalesAmount = (openTime: Dayjs | null, closeTime: Dayjs | null) => number

const getSalesAmount: GetSalesAmount = (openTime, closeTime) => {
    return transactions.filter(
        record => dayjs(record.orderDate).isBetween(openTime?.startOf('date'), closeTime?.startOf('date'), null, "[]")
    ).reduce((prev, current) => prev + current.orderPrice, 0)
}

export type { Customer, Transaction, GetCustomersAsync, GetTransactionsAsync, GetSalesAmount as GetSalesReport }
export { getCustomersAsync, getTransactionsAsync, getSalesAmount }