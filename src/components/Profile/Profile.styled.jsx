import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    margin-bottom: 20px;
`;

export const Info = styled.div`
    padding: 36px;
    background-color: #fff;
`;

export const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 30px;
`;

export const Name = styled.p`
    text-align: center;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
`;

export const Data = styled.p`
    text-align: center;
    margin: 8px 0 0 0;
    color: gray;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: stretch;

    background-color: #eef2f9;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 1px solid #dce3ef;
`;

export const Label = styled.span`
    font-size: 12px; 
`;

export const Quantity = styled.span`
    font-size: 14px;  
    font-weight: 700;
`;