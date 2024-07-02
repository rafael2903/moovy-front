import { LoginPage, NotFoundPage, RegisterPage } from 'pages'
import { createBrowserRouter } from 'react-router-dom'
import { Header } from 'components'

// const AuthRoute = ({ children }) => {
//     const { user } = useUser()
//     if (!user) {
//         return <Navigate to='/entrar' />
//     }
//     return children
// }

// const GuestRoute = ({ children }) => {
//     const { user } = useUser()
//     if (user) {
//         return <Navigate to='/' />
//     }
//     return children
// }

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                index: true,
                // element: <Home />,
                element: <h1>Hello World</h1>,
            },
            {
                path: 'login',
                element: (
                    // <GuestRoute>
                    <LoginPage />
                    // </GuestRoute>
                ),
            },
            {
                path: 'register',
                element: (
                    // <GuestRoute>
                    <RegisterPage />
                    // </GuestRoute>
                ),
            },
        ],
        errorElement: <NotFoundPage />,
    },
])
