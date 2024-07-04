import SearchIcon from '@mui/icons-material/Search'
import { useUser } from 'hooks/useUser'
import {
    NavLink,
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom'
import { api } from 'services'
import {
    AccountContainer,
    Container,
    Image,
    Link,
    LinksContainer,
    SearchBar,
} from './styles'

export const Header = () => {
    const { user, logout } = useUser()
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const title = searchParams.get('q')

    const signOut = () => {
        api.post('/logout')
        logout()
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (location.pathname !== '/search') {
            navigate('/search')
        }
        setSearchParams({ q: e.target.value })
    }

    return (
        <>
            <Container>
                <LinksContainer>
                    <NavLink to='/'><Image /></NavLink>
                    {user && <Link to='/'>My Library</Link>}
                </LinksContainer>

                {!!user && (
                    <SearchBar>
                        <SearchIcon />
                        <input
                            type='search'
                            placeholder='Search movies'
                            value={title || ''}
                            onChange={handleSearch}
                        ></input>
                    </SearchBar>
                )}

                <AccountContainer>
                    {user ? (
                        <>
                            <Link as='button' to='/logout' onClick={signOut}>
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Sign In</Link>
                            <Link to='/register'>Sign Up</Link>
                        </>
                    )}
                </AccountContainer>
            </Container>
            <Outlet />
        </>
    )
}
