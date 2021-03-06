import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;

        border: 1px solid var(--gray-dark);
        background: var(--gray-light);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        color: var(--shape);
        background: var(--green);

        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        border-radius: 0.25rem;
        transition: filter .2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--gray-dark);
    border-radius: 0.25rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .2s;
    
    background: ${(props) => props.isActive 
        ? transparentize(0.8, props.activeColor)    
        : 'transparent'
    };

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        height: 20px;
        width: 20px;
    }

    span {
        color: var(--text-title);
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
    }
`;