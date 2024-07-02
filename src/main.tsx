import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'
import UserContextProvider from 'contexts/UserContext'
import { theme } from 'theme'

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
