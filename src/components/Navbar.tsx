import { Link, useLocation } from 'react-router'
import { IconTerminal2 } from '@tabler/icons-react'
import { useLanguage } from '../contexts/LanguageContext'
import classes from './Navbar.module.css'

const Navbar = () => {
    const location            = useLocation()
    const { lang, t, toggle } = useLanguage()

    const navLinks = [
        { to: '/',        label: t.nav.home    },
        { to: '/about',   label: t.nav.about   },
        { to: '/contact', label: t.nav.contact  },
    ]

    return (
        <nav className={classes.bar}>
            {/* Logo */}
            <Link
                to="/"
                className={classes.logo}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <IconTerminal2 size={16} />
                <span>skyhaibara</span>
            </Link>

            {/* Center nav links */}
            <ul className={classes.links}>
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            className={classes.link}
                            data-active={location.pathname === link.to || undefined}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right side */}
            <div className={classes.right}>
                <a
                    href="https://blog.skyhaibara.top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.blogLink}
                >
                    {t.nav.blog}
                </a>
                <span className={classes.divider} aria-hidden="true" />
                <button
                    className={classes.langBtn}
                    onClick={toggle}
                    title={lang === 'en' ? '切换为中文' : 'Switch to English'}
                >
                    {lang === 'en' ? '中文' : 'EN'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
