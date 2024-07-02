import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import { Container, Subtitle, Title } from './styles'

export const NotFoundPage = () => {
    const error = useRouteError()
    let errorMessage: string
    if (isRouteErrorResponse(error)) {
        errorMessage = `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
        errorMessage = error.message
    } else if (typeof error === 'string') {
        errorMessage = error
    } else {
        errorMessage = 'Unknown error'
    }

    console.error(error)

    return (
        <Container>
            <Title>404</Title>
            <Subtitle>Página não encontrada!</Subtitle>
            <p>{errorMessage}</p>
            <Link to='/'>Ir para página inicial</Link>
        </Container>
    )
}
