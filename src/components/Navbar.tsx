import { Group, Text, Button, Container } from '@mantine/core'
import { Link, useLocation } from 'react-router'
import { IconTerminal2 } from '@tabler/icons-react'
import { useLanguage } from '../contexts/LanguageContext'
import classes from './Navbar.module.css'

const Navbar = () => {
    const location = useLocation()
    const { lang, t, toggle } = useLanguage()

    const navLinks = [
        { to: '/', label: t.nav.home },
        { to: '/about', label: t.nav.about },
        { to: '/contact', label: t.nav.contact },
    ]

    return (
        <Container size="lg" h="100%">
            <Group h="100%" justify="space-between">
                <Link
                    to="/"
                    className={classes.logo}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <IconTerminal2 size={20} />
                    <Text fw={700} size="lg" ff="monospace" component="span">
                        skyhaibara
                    </Text>
                </Link>

                <Group gap={4}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={classes.link}
                            data-active={
                                location.pathname === link.to || undefined
                            }
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={toggle}
                        className={classes.langToggle}
                        title={lang === 'en' ? '切换为中文' : 'Switch to English'}
                    >
                        {lang === 'en' ? '中文' : 'EN'}
                    </button>

                    <Button
                        component="a"
                        href="https://blog.skyhaibara.top"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
                        ml={8}
                    >
                        {t.nav.blog}
                    </Button>
                </Group>
            </Group>
        </Container>
    )
}

export default Navbar
