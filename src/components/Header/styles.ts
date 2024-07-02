import Logo from 'assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    padding:  1.6rem 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* border-bottom: 1px solid; */
    /* border-color: ${({ theme }) => theme.colors.borderLight}; */
`

export const LinksContainer = styled.div`
    display: flex;
`

export const AccountContainer = styled.div`
`

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
    alt: 'Logo avalia.ai',
})`
    width: 16rem;
    margin-right: 3rem;
`
