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
import { useLanguage } from '../contexts/LanguageContext'
import classes from './Home.module.css'
import FadeIn from '../components/FadeIn'

const projectMeta = [
    { tags: ['React', 'TypeScript'], href: 'https://blog.skyhaibara.top', icon: '✍️' },
    { tags: ['GitHub', 'OSS'], href: 'https://github.com/skyhaibara', icon: '🔓' },
    { tags: ['Mantine', 'Vite'], href: '#', icon: '🌐' },
]

const techIcons = [
    { icon: IconBrandReact, label: 'React', color: '#61dafb' },
    { icon: IconBrandTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: IconBrandNodejs, label: 'Node.js', color: '#68a063' },
    { icon: IconBrandPython, label: 'Python', color: '#ffd43b' },
]

const Home = () => {
    const navigate = useNavigate()
    const { t } = useLanguage()
    const h = t.home

    return (
        <div className={classes.page}>
            {/* ── Hero ── */}
            <section className={classes.hero}>
                <div className={classes.orb1} />
                <div className={classes.orb2} />
                <div className={classes.orb3} />

                <Container size="md" className={classes.heroContent}>
                    <FadeIn>
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
                                <Text className={classes.heroSub}>{h.heroSub}</Text>
                                <Text c="dimmed" size="md" ta="center" maw={460} lh={1.9}>
                                    {h.heroDesc}
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
                                    {h.visitBlog}
                                </Button>
                                <Button
                                    onClick={() => navigate('/contact')}
                                    size="lg"
                                    variant="outline"
                                    color="violet"
                                    className={classes.ctaSecondary}
                                >
                                    {h.getInTouch}
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
                    </FadeIn>

                    <div className={classes.scrollHint}>
                        <IconArrowDown size={18} className={classes.scrollIcon} />
                        <Text size="xs" c="dimmed">scroll</Text>
                    </div>
                </Container>
            </section>

            {/* ── Projects ── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="lg">
                        <Stack gap="3rem">
                            <Stack align="center" gap="sm">
                                <Badge variant="dot" color="violet" size="lg">
                                    {h.projectsBadge}
                                </Badge>
                                <Title order={2} className={classes.sectionTitle}>
                                    {h.projectsTitle}
                                </Title>
                                <Text c="dimmed" ta="center" maw={480} lh={1.7}>
                                    {h.projectsDesc}
                                </Text>
                            </Stack>

                            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                                {h.projects.map((p, i) => (
                                    <Card
                                        key={p.title}
                                        component="a"
                                        href={projectMeta[i].href}
                                        target={
                                            projectMeta[i].href !== '#' ? '_blank' : undefined
                                        }
                                        rel="noopener noreferrer"
                                        className={classes.projectCard}
                                        padding="xl"
                                        radius="lg"
                                    >
                                        <Stack gap="md">
                                            <Text size="2rem">{projectMeta[i].icon}</Text>
                                            <div>
                                                <Text fw={600} size="lg" c="white" mb={6}>
                                                    {p.title}
                                                </Text>
                                                <Text size="sm" c="dimmed" lh={1.7}>
                                                    {p.desc}
                                                </Text>
                                            </div>
                                            <Group gap="xs" mt="auto">
                                                {projectMeta[i].tags.map((tag) => (
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
            </FadeIn>

            {/* ── CTA Banner ── */}
            <FadeIn delay={100}>
                <section className={classes.section}>
                    <Container size="md">
                        <Card className={classes.ctaBanner} padding="3rem" radius="xl">
                            <div className={classes.bannerGlow} />
                            <Stack align="center" gap="lg">
                                <Title order={2} c="white" ta="center" size="1.8rem">
                                    {h.ctaTitle}
                                </Title>
                                <Text c="dimmed" ta="center" maw={380} lh={1.7}>
                                    {h.ctaDesc}
                                </Text>
                                <Group gap="md">
                                    <Button
                                        onClick={() => navigate('/contact')}
                                        size="md"
                                        variant="gradient"
                                        gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
                                        rightSection={<IconArrowRight size={15} />}
                                    >
                                        {h.sayHello}
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
            </FadeIn>

            <footer className={classes.footer}>
                <Text size="sm" c="dimmed">{h.footer}</Text>
            </footer>
        </div>
    )
}

export default Home
