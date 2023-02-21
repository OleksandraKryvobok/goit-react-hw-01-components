import styled from "styled-components";

export const Container = styled.section`
    width: 400px;
    background-color: #fff;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    padding: 24px;
    margin: 0;

    text-transform: uppercase;
    color: #a3a3a3;
`;

export const List = styled.ul`
    display: flex;
    justify-content: stretch;
    width: 100%;
`;

function getRandomHexColor() {
    return `
        #${Math.floor(Math.random()*16777215).toString(16).padStart(6, 0)}
    `;
}

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 80px;

    background-color: ${getRandomHexColor};

    padding: 16px;
`;

export const Label = styled.span`
    font-size: 16px;
`;

export const Percentage = styled.span`
    font-size: 20px;
    font-weight: 700;
`;
