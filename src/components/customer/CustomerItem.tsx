import { FC } from 'react'
import { Customer } from "../../lib/api";

const CustomerItem: FC<Customer> = (customer) => {
    return (
        <>
            <ul>
                <li style={{ listStyle: 'none', display: 'inline' }}>{customer.id.toString()}</li>
                <li style={{ listStyle: 'none', display: 'inline', paddingLeft: '10px' }}>{customer.name}</li>
            </ul>
        </>)
}

export default CustomerItem