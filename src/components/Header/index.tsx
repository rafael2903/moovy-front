import { useUser } from 'hooks/useUser'
import { Outlet } from 'react-router-dom'
import {
    AccountContainer,
    Container,
    Image,
    Link,
    LinksContainer,
} from './styles'

export const Header = () => {
    const { user, logout } = useUser()

    return (
        <>
            <Container>
                <LinksContainer>
                    <Image />
                    {user && <Link to='/library'>My Library</Link>}
                </LinksContainer>

                <AccountContainer>
                    {user ? (
                        <>
                            <Link as='button' to='/logout' onClick={logout}>
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
