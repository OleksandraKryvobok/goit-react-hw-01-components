import styled from "styled-components";

export const List = styled.ul`
    width: 400px;

    background-color: #fff;
    padding: 12px;
`;

export const Item = styled.li`
    width: 100%;
    padding: 12px;
    border: 1px solid #dce3ef;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => {
        return props.isOnline ? '#22a40b' :'#ff0000';
    }};
`;

export const Avatar = styled.img`
    width: 55px;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
`;