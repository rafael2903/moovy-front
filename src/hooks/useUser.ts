import { UserContext, UserContextType } from 'contexts/UserContext'
import { useContext } from 'react'

export function useUser(): UserContextType {
    const values = useContext(UserContext)
    return values
}
