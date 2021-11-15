import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue-light);
        transition: filter 0.2s;
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;
        border: 0;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media(max-width: 400px) {
        button {
            padding: 0 1.5rem;
        }
    }
`;