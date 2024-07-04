import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { User } from 'types/User'

export interface UserContextType {
    user: User | undefined
    setUser: Dispatch<SetStateAction<User | undefined>>
    login: (user: User) => void
    logout: () => void
}

export const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: () => {},
    login: () => {},
    logout: () => {},
})

export default function UserContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState<User>()

    const login = (user: User) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setUser(undefined)
        localStorage.removeItem('user')
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
