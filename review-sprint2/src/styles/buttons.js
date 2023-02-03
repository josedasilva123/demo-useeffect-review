import styled from "styled-components";

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 0px 20px;
    height: 48px;

    background: var(--color-black);
    color: var(--color-white);

    :hover{
        filter: brightness(1.4);        
    }
`