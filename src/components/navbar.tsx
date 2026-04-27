import { Group, Text, Button, Container } from '@mantine/core'
import { Link, useLocation } from 'react-router'
import { IconTerminal2 } from '@tabler/icons-react'
import classes from './Navbar.module.css'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
    const location = useLocation()

    return (
        <Container size="lg" h="100%">
            <Group h="100%" justify="space-between">
                <Link to="/" className={classes.logo}>
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
                        >
                            {link.label}
                        </Link>
                    ))}
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
                        Blog →
                    </Button>
                </Group>
            </Group>
        </Container>
    )
}

export default Navbar
