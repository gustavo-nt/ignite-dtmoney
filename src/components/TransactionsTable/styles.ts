import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    margin-top: 4rem;
    overflow: auto;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            &:first-child {
                color: var(--text-title);
                border-radius: .25rem 0 0 .25rem;
            }
            
            &:last-child {
                border-radius: 0 .25rem .25rem 0;
            }
        }
    }

    &::-webkit-scrollbar {
        height: 14px;
        cursor: pointer;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        border: 4px solid var(--background);
        background: rgba(0, 0, 0, .2);
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, .25);
    }
    
    &::-webkit-scrollbar-track {
        background: var(--background);
    }

    @media(max-width: 800px) {
        margin-top: 2.5rem;
    }
`;