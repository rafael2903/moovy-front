import styled from 'styled-components'

export const StyledMovieCard = styled.div`
    width: 100%;
    max-width: 40rem;
    padding: 0.8rem;
    background-color: ${({ theme }) => theme.colors.secondary};

    img {
        width: 100%;
        margin-bottom: 0.8rem;
    }
`

export const MovieInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  center;
    margin-bottom: 0.8rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    svg {
        width: 1.8rem;
        height: 1.8rem;

        &.watched {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`
export const MovieTitle = styled.p`
    font-weight: 600;
`
