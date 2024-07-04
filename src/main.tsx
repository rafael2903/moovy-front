import UserContextProvider from 'contexts/UserContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import App from './App'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </UserContextProvider>
    </React.StrictMode>
)
