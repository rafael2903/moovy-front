import { Button, MovieCard } from 'components'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetcher } from 'services'
import { Movie } from 'types/Movie'
import { Container, Movies, Title } from './styles'

interface SearchResponse {
    movies: Movie[]
    totalResults: number
    totalPages: number
}

export const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const title = searchParams.get('q')
    const [search, setSearch] = useState(title)

    const [data, setData] = useState<SearchResponse>({
        movies: [],
        totalResults: 0,
        totalPages: 0,
    })

    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetcher({
            url: 'movies/search',
            params: { title: search, page },
        })
            .then((newData) =>
                setData({
                    ...newData,
                    movies: [...data.movies, ...newData.movies],
                })
            )
            .catch(() => setError(true))
            .finally(() => setIsLoading(false))
    }, [search, page])

    const throttledSearch = useCallback(throttle(setSearch, 1000), [])

    useEffect(() => {
        setData({ movies: [], totalResults: 0, totalPages: 0 })
        throttledSearch(title)
    }, [title])

    if (error) return <div>Error</div>
    if (data.movies.length === 0 && isLoading) return <div>Loading</div>

    return (
        <Container>
            <Title>
                {!title?.length ? (
                    <>Type in search bar to search for a movie.</>
                ) : (
                    <>
                        Found {data?.totalResults || 0} movies for "{title}".
                    </>
                )}
            </Title>
            <Movies>
                {data.movies.map((movie) => (
                    <MovieCard movieData={movie} key={movie.imdbID} />
                ))}
            </Movies>

            {page !== data.totalPages && data.totalResults !== 0 && (
                <Button
                    value='Load more'
                    onClick={() => setPage(page + 1)}
                    isLoading={isLoading}
                />
            )}
        </Container>
    )
}
