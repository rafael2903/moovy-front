import { MovieCard } from 'components'
import { useEffect, useState } from 'react'
import { fetcher } from 'services'
import { Movie } from 'types/Movie'
import { Container, Movies, Subtitle, Title } from './styles'

interface LibraryEntry {
    movie: Movie
}

export const LibraryPage = () => {
    const [data, setData] = useState<LibraryEntry[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetcher({
            url: '/library',
        })
            .then((data) => setData(data))
            .catch(() => setError(true))
            .finally(() => setIsLoading(false))
    }, [])

    if (error) return <div>Error</div>
    if (isLoading) return <div>Loading</div>

    return (
        <Container>
            <Title>My Library</Title>
            <Subtitle>
                {!data.length && (
                    <>Search movies and add them to your library</>
                )}
            </Subtitle>
            <Movies>
                {data.map(({ movie }) => (
                    <MovieCard
                        movieData={{ ...movie, watched: true }}
                        key={movie.imdbID}
                    />
                ))}
            </Movies>
        </Container>
    )
}
