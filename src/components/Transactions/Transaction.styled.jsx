import styled from "styled-components";

export const Table = styled.table`
    width: 420px;
    margin-top: 20px;
    border-spacing: 0;
    background-color: #fff;

    font-size: 8px;
`;

export const TableHead = styled.thead`
    text-transform: uppercase;
    color: #fff;
    background-color: #3ebfc6;
`; 

export const TableHeader = styled.th`
    width: 140px;
    border: 1px solid #42c8cf;
`;

export const TableRaw = styled.tr`
    height: 28px;

    &:nth-child(even) {
        background: #e1dfdf;
    }
`;

export const TableDataType = styled.td`
    padding-left: 55px;
    border: 1px solid #efeeee;

    color: #777777;
    text-transform: capitalize;
`;

export const TableData = styled.td`
    text-align: center;
    border: 1px solid #efeeee;

    color: #777777;
`;