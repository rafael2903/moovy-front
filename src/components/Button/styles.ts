import styled from 'styled-components'
import { ButtonProps } from './index'

export const StyledButton = styled.input.attrs({
    type: 'submit',
})<Omit<ButtonProps, 'value' | 'isLoading'>>`
    background-color: ${({ theme, destructive }) => {
        return destructive ? theme.colors.destructive : theme.colors.primary
    }};
    /* width: 100%; */
    color: #fff;
    border: none;
    border-radius: 2rem;
    padding: 1rem 3rem;
    font-size: 1.9rem;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    margin-top: 2.5rem;
    font-weight: bold;

    &:hover {
        filter: ${({ theme, destructive }) => {
            const color = destructive
                ? theme.colors.destructive
                : theme.colors.primary
            return `drop-shadow(0 0 0.5rem ${color}88)`
        }};
    }
`
