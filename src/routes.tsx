import { Header } from 'components'
import { useUser } from 'hooks/useUser'
import {
    LibraryPage,
    LoginPage,
    NotFoundPage,
    RegisterPage,
    SearchPage,
} from 'pages'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
    const { user } = useUser()
    if (!user) {
        return <Navigate to='/login' />
    }
    return children
}

const GuestRoute = ({ children }) => {
    const { user } = useUser()
    if (user) {
        return <Navigate to='/' />
    }
    return children
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                index: true,
                element: (
                    <AuthRoute>
                        <LibraryPage />
                    </AuthRoute>
                ),
            },
            {
                path: 'login',
                element: (
                    <GuestRoute>
                        <LoginPage />
                    </GuestRoute>
                ),
            },
            {
                path: 'register',
                element: (
                    <GuestRoute>
                        <RegisterPage />
                    </GuestRoute>
                ),
            },
            {
                path: 'search',
                element: (
                    <AuthRoute>
                        <SearchPage />
                    </AuthRoute>
                ),
            },
        ],
        errorElement: <NotFoundPage />,
    },
])
