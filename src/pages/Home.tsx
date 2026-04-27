import {
    Container,
    Title,
    Text,
    Button,
    Group,
    Avatar,
    Stack,
    SimpleGrid,
    Card,
    Badge,
    ThemeIcon,
} from '@mantine/core'
import { useNavigate } from 'react-router'
import {
    IconArrowRight,
    IconBrandGithub,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandPython,
    IconArrowDown,
} from '@tabler/icons-react'
import classes from './Home.module.css'

const projects = [
    {
        title: 'Personal Blog',
        desc: 'A fast, modern blog built with cutting-edge web technologies. Sharing thoughts on code and life.',
        tags: ['React', 'TypeScript'],
        href: 'https://blog.skyhaibara.top',
        icon: '✍️',
    },
    {
        title: 'Open Source',
        desc: 'Contributing to the community with open-source tools, utilities, and experiments.',
        tags: ['GitHub', 'OSS'],
        href: 'https://github.com/skyhaibara',
        icon: '🔓',
    },
    {
        title: 'This Website',
        desc: 'My personal portfolio built with React, Mantine UI, and a sprinkle of CSS magic.',
        tags: ['Mantine', 'Vite'],
        href: '#',
        icon: '🌐',
    },
]

const techIcons = [
    { icon: IconBrandReact, label: 'React', color: '#61dafb' },
    { icon: IconBrandTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: IconBrandNodejs, label: 'Node.js', color: '#68a063' },
    { icon: IconBrandPython, label: 'Python', color: '#ffd43b' },
]

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.page}>
            {/* ── Hero ── */}
            <section className={classes.hero}>
                <div className={classes.orb1} />
                <div className={classes.orb2} />
                <div className={classes.orb3} />

                <Container size="md" className={classes.heroContent}>
                    <Stack align="center" gap="xl">
                        <div className={classes.avatarWrap}>
                            <Avatar
                                src="/haibara.ico"
                                size={110}
                                radius="xl"
                                className={classes.avatar}
                            />
                            <div className={classes.avatarGlow} />
                        </div>

                        <Stack align="center" gap="sm">
                            <Title order={1} className={classes.heroName}>
                                skyhaibara
                            </Title>
                            <Text className={classes.heroSub}>
                                Full-Stack Developer · Open Source Enthusiast
                            </Text>
                            <Text
                                c="dimmed"
                                size="md"
                                ta="center"
                                maw={460}
                                lh={1.9}
                            >
                                Building beautiful digital experiences with
                                modern technologies. Passionate about clean code
                                and elegant design.
                            </Text>
                        </Stack>

                        <Group gap="md" mt="sm">
                            <Button
                                component="a"
                                href="https://blog.skyhaibara.top"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                variant="gradient"
                                gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
                                rightSection={<IconArrowRight size={16} />}
                                className={classes.ctaPrimary}
                            >
                                Visit Blog
                            </Button>
                            <Button
                                onClick={() => navigate('/contact')}
                                size="lg"
                                variant="outline"
                                color="violet"
                                className={classes.ctaSecondary}
                            >
                                Get in Touch
                            </Button>
                        </Group>

                        <Group gap="lg" mt="xs">
                            {techIcons.map((t) => (
                                <ThemeIcon
                                    key={t.label}
                                    size="lg"
                                    radius="md"
                                    variant="transparent"
                                    style={{ color: t.color }}
                                    title={t.label}
                                >
                                    <t.icon size={22} />
                                </ThemeIcon>
                            ))}
                        </Group>
                    </Stack>

                    <div className={classes.scrollHint}>
                        <IconArrowDown size={18} className={classes.scrollIcon} />
                        <Text size="xs" c="dimmed">scroll</Text>
                    </div>
                </Container>
            </section>

            {/* ── Projects ── */}
            <section className={classes.section}>
                <Container size="lg">
                    <Stack gap="3rem">
                        <Stack align="center" gap="sm">
                            <Badge variant="dot" color="violet" size="lg">
                                Projects
                            </Badge>
                            <Title order={2} className={classes.sectionTitle}>
                                Things I&apos;ve Built
                            </Title>
                            <Text c="dimmed" ta="center" maw={480} lh={1.7}>
                                A selection of personal projects, experiments,
                                and things I care about.
                            </Text>
                        </Stack>

                        <SimpleGrid
                            cols={{ base: 1, sm: 2, md: 3 }}
                            spacing="lg"
                        >
                            {projects.map((p) => (
                                <Card
                                    key={p.title}
                                    component="a"
                                    href={p.href}
                                    target={
                                        p.href !== '#' ? '_blank' : undefined
                                    }
                                    rel="noopener noreferrer"
                                    className={classes.projectCard}
                                    padding="xl"
                                    radius="lg"
                                >
                                    <Stack gap="md">
                                        <Text size="2rem">{p.icon}</Text>
                                        <div>
                                            <Text
                                                fw={600}
                                                size="lg"
                                                c="white"
                                                mb={6}
                                            >
                                                {p.title}
                                            </Text>
                                            <Text
                                                size="sm"
                                                c="dimmed"
                                                lh={1.7}
                                            >
                                                {p.desc}
                                            </Text>
                                        </div>
                                        <Group gap="xs" mt="auto">
                                            {p.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="light"
                                                    color="violet"
                                                    size="sm"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </Group>
                                    </Stack>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Container>
            </section>

            {/* ── CTA Banner ── */}
            <section className={classes.section}>
                <Container size="md">
                    <Card className={classes.ctaBanner} padding="3rem" radius="xl">
                        <div className={classes.bannerGlow} />
                        <Stack align="center" gap="lg">
                            <Title order={2} c="white" ta="center" size="1.8rem">
                                Let&apos;s work together
                            </Title>
                            <Text c="dimmed" ta="center" maw={380} lh={1.7}>
                                Have a project in mind or just want to say hi?
                                My inbox is always open.
                            </Text>
                            <Group gap="md">
                                <Button
                                    onClick={() => navigate('/contact')}
                                    size="md"
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
                                    rightSection={<IconArrowRight size={15} />}
                                >
                                    Say Hello
                                </Button>
                                <Button
                                    component="a"
                                    href="https://github.com/skyhaibara"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="md"
                                    variant="subtle"
                                    color="violet"
                                    leftSection={<IconBrandGithub size={17} />}
                                >
                                    GitHub
                                </Button>
                            </Group>
                        </Stack>
                    </Card>
                </Container>
            </section>

            <footer className={classes.footer}>
                <Text size="sm" c="dimmed">
                    © {new Date().getFullYear()} skyhaibara · Built with React &
                    Mantine
                </Text>
            </footer>
        </div>
    )
}

export default Home
