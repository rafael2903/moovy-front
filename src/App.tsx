import { useUser } from 'hooks/useUser.js'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'

function App() {
    const { setUser, logout } = useUser()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) setUser(JSON.parse(user))
    }, [setUser])

    useEffect(() => {
        window.addEventListener('logout', logout)

        return () => {
            window.removeEventListener('logout', logout)
        }
    }, [logout])

    return <RouterProvider router={router} />
}

export default App
