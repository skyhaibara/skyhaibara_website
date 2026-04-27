import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'

export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import('./pages/Home')).default,
                }),
            },
            {
                path: 'about',
                lazy: async () => ({
                    Component: (await import('./pages/About')).default,
                }),
            },
            {
                path: 'contact',
                lazy: async () => ({
                    Component: (await import('./pages/Contact')).default,
                }),
            },
        ],
    },
])
