import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core'
import { LanguageProvider } from './contexts/LanguageContext'

const theme = createTheme({
    primaryColor: 'violet',
    defaultRadius: 'md',
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    headings: {
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        fontWeight: '700',
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LanguageProvider>
            <MantineProvider theme={theme} defaultColorScheme="dark">
                <App />
            </MantineProvider>
        </LanguageProvider>
    </React.StrictMode>
)
