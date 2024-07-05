import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 3rem;
    margin-top: 3rem;
    padding: 2rem;
`

export const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    width: 100%;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 400;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.textSoft};
`
