import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import StarIcon from '@mui/icons-material/Star'
import Placeholder from 'assets/placeholder.png'
import { useState } from 'react'
import { api } from 'services'
import { MovieInfos, MovieTitle, StyledMovieCard } from './styles'
import { Movie } from 'types/Movie'

export interface MovieCardProps extends React.ComponentPropsWithoutRef<'div'> {
    movieData: Movie
}

export const MovieCard = ({ movieData, ...rest }: MovieCardProps) => {
    const [watched, setWatched] = useState(movieData.watched)

    const removeFromLibrary = () => {
        api.delete(`/library/remove/${movieData.imdbID}`)
    }

    const addToLibrary = () => {
        const { imdbID } = movieData
        api.post(`/library/add`, {
            imdbID,
        })
    }

    const handleClick = () => {
        if (watched) removeFromLibrary()
        else addToLibrary()

        setWatched(!watched)
    }

    return (
        <StyledMovieCard {...rest}>
            <img
                src={movieData.poster == 'N/A' ? Placeholder : movieData.poster}
            ></img>
            <div>
                <MovieInfos>
                    <div>
                        <p>{movieData.imdbRating}</p>
                        <StarIcon />
                    </div>
                    <button onClick={handleClick}>
                        {watched ? (
                            <LibraryAddCheckIcon className='watched' />
                        ) : (
                            <LibraryAddIcon />
                        )}
                    </button>
                </MovieInfos>
                <MovieTitle>
                    {movieData.title} ({movieData.year})
                </MovieTitle>
            </div>
        </StyledMovieCard>
    )
}
