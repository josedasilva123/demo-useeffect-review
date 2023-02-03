import styled from "styled-components";

export const StyledChampionList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 850px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 650px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 420px){
        grid-template-columns: 1fr;
    }
`