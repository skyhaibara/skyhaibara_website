import { Outlet } from 'react-router'
import Navbar from './Navbar'
import classes from './Layout.module.css'

const Layout = () => (
    <div className={classes.root}>
        <header className={classes.header}>
            <Navbar />
        </header>
        <main className={classes.main}>
            <Outlet />
        </main>
    </div>
)

export default Layout
