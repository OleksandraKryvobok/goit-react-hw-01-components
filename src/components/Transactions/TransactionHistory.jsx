import PropTypes from 'prop-types';
import { Table, TableHead, TableHeader, TableRaw, TableDataType, TableData } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
            <TableHead>
                <TableRaw>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableRaw>
            </TableHead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRaw key={id}>
                        <TableDataType>{type}</TableDataType>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRaw>
                ))}
            </tbody>
        </Table>  
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};