import Logo from 'assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    padding:  1.6rem 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LinksContainer = styled.div`
    display: flex;
`

export const AccountContainer = styled.div`
`

export const SearchBar = styled.div`
    position: relative;
    width: 50%;
    max-width: 50rem;

    input {
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 10rem;
        padding: 0.8rem 1.6rem;
        padding-left: 4.4rem;
        border: 1px solid transparent;
        width: 100%;

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.borderActive};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.textDark};
        }

    }

    svg {
        height: 2rem;
        width: 2rem;
        position: absolute;
        top: 50%;
        left: 1.6rem;
        transform: translateY(-50%);
    }

`;

export const Link = styled(NavLink)`
    padding: 2rem;
    color: ${({ theme }) => theme.colors.text};

    &.active {
        color: ${({ theme }) => theme.colors.textLinkActive};
        font-weight: bold;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.textLinkActive};
    }
`

export const Image = styled.img.attrs({
    src: Logo,
    alt: 'Moovy logo',
})`
    width: 16rem;
    margin-right: 3rem;
`
