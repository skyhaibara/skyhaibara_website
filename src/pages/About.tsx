import {
    Container,
    Title,
    Text,
    Stack,
    SimpleGrid,
    ThemeIcon,
    Badge,
    Avatar,
    Group,
    Timeline,
} from '@mantine/core'
import {
    IconBrandReact,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandGit,
    IconBrandDocker,
    IconBrandVscode,
    IconTerminal2,
    IconCode,
    IconRocket,
    IconHeart,
    IconBriefcase,
} from '@tabler/icons-react'
import { useLanguage } from '../contexts/LanguageContext'
import classes from './About.module.css'
import FadeIn from '../components/FadeIn'

const skillsMeta = [
    { icon: IconBrandReact, label: 'React', color: '#61dafb' },
    { icon: IconBrandTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: IconBrandNodejs, label: 'Node.js', color: '#68a063' },
    { icon: IconBrandPython, label: 'Python', color: '#ffd43b' },
    { icon: IconBrandGit, label: 'Git', color: '#f05032' },
    { icon: IconBrandDocker, label: 'Docker', color: '#2496ed' },
    { icon: IconBrandVscode, label: 'VS Code', color: '#007acc' },
    { icon: IconTerminal2, label: 'Linux', color: '#fcc624' },
]

const valueIcons = [IconCode, IconRocket, IconHeart]
const valueColors = ['#a78bfa', '#60a5fa', '#f472b6']
const timelineIcons = [IconRocket, IconCode, IconBriefcase, IconHeart]

const About = () => {
    const { t } = useLanguage()
    const a = t.about

    return (
        <div className={classes.page}>
            {/* ── Hero ── */}
            <section className={classes.hero}>
                <div className={classes.orb1} />
                <div className={classes.orb2} />
                <Container size="md" className={classes.heroContent}>
                    <FadeIn>
                        <Stack align="center" gap="xl">
                            <div className={classes.avatarWrap}>
                                <Avatar
                                    src="/haibara.ico"
                                    size={100}
                                    radius="xl"
                                    className={classes.avatar}
                                />
                                <div className={classes.avatarGlow} />
                            </div>
                            <Stack align="center" gap="sm">
                                <Badge variant="dot" color="violet" size="lg">
                                    {a.heroBadge}
                                </Badge>
                                <Title order={1} className={classes.heroName}>
                                    {a.heroTitle}
                                </Title>
                                <Text c="dimmed" size="md" ta="center" maw={520} lh={1.9}>
                                    {a.heroDesc}
                                </Text>
                            </Stack>
                        </Stack>
                    </FadeIn>
                </Container>
            </section>

            {/* ── Values ── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="lg">
                        <Stack gap="3rem">
                            <Stack align="center" gap="sm">
                                <Badge variant="dot" color="violet" size="lg">
                                    {a.valuesBadge}
                                </Badge>
                                <Title order={2} className={classes.sectionTitle}>
                                    {a.valuesTitle}
                                </Title>
                            </Stack>
                            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                                {a.values.map((v, i) => {
                                    const Icon = valueIcons[i]
                                    return (
                                        <div key={v.label} className={classes.valueCard}>
                                            <ThemeIcon
                                                size={48}
                                                radius="md"
                                                variant="light"
                                                color="violet"
                                                mb="md"
                                                style={{ color: valueColors[i] }}
                                            >
                                                <Icon size={24} />
                                            </ThemeIcon>
                                            <Text fw={600} size="lg" c="white" mb={8}>
                                                {v.label}
                                            </Text>
                                            <Text size="sm" c="dimmed" lh={1.7}>
                                                {v.desc}
                                            </Text>
                                        </div>
                                    )
                                })}
                            </SimpleGrid>
                        </Stack>
                    </Container>
                </section>
            </FadeIn>

            {/* ── Skills ── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="lg">
                        <Stack gap="3rem">
                            <Stack align="center" gap="sm">
                                <Badge variant="dot" color="violet" size="lg">
                                    {a.skillsBadge}
                                </Badge>
                                <Title order={2} className={classes.sectionTitle}>
                                    {a.skillsTitle}
                                </Title>
                                <Text c="dimmed" ta="center" maw={440} lh={1.7}>
                                    {a.skillsDesc}
                                </Text>
                            </Stack>
                            <SimpleGrid cols={{ base: 2, xs: 4, md: 8 }} spacing="md">
                                {skillsMeta.map((s) => (
                                    <div key={s.label} className={classes.skillTile}>
                                        <ThemeIcon
                                            size={44}
                                            radius="lg"
                                            variant="transparent"
                                            style={{ color: s.color }}
                                        >
                                            <s.icon size={26} />
                                        </ThemeIcon>
                                        <Text size="xs" c="dimmed" mt={6}>
                                            {s.label}
                                        </Text>
                                    </div>
                                ))}
                            </SimpleGrid>
                        </Stack>
                    </Container>
                </section>
            </FadeIn>

            {/* ── Timeline ── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="sm">
                        <Stack gap="3rem">
                            <Stack align="center" gap="sm">
                                <Badge variant="dot" color="violet" size="lg">
                                    {a.journeyBadge}
                                </Badge>
                                <Title order={2} className={classes.sectionTitle}>
                                    {a.journeyTitle}
                                </Title>
                            </Stack>
                            <Timeline
                                active={3}
                                bulletSize={28}
                                lineWidth={2}
                                color="violet"
                                className={classes.timeline}
                            >
                                {a.timeline.map((item, i) => {
                                    const Icon = timelineIcons[i]
                                    return (
                                        <Timeline.Item
                                            key={item.title}
                                            bullet={<Icon size={14} />}
                                            title={
                                                <Text fw={600} c="white" size="md">
                                                    {item.title}
                                                </Text>
                                            }
                                        >
                                            <Text c="dimmed" size="sm" lh={1.7} mt={4}>
                                                {item.desc}
                                            </Text>
                                        </Timeline.Item>
                                    )
                                })}
                            </Timeline>
                        </Stack>
                    </Container>
                </section>
            </FadeIn>

            {/* ── Personal ── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="sm">
                        <div className={classes.personalCard}>
                            <div className={classes.personalGlow} />
                            <Group gap="md" mb="lg">
                                <Avatar src="/haibara.ico" size={56} radius="xl" />
                                <div>
                                    <Text fw={700} c="white" size="lg">
                                        skyhaibara
                                    </Text>
                                    <Text size="sm" c="dimmed">
                                        {a.personalRole}
                                    </Text>
                                </div>
                            </Group>
                            <Text c="dimmed" lh={1.9} size="sm">
                                {a.personalDesc}
                            </Text>
                        </div>
                    </Container>
                </section>
            </FadeIn>

            <footer className={classes.footer}>
                <Text size="sm" c="dimmed">{a.footer}</Text>
            </footer>
        </div>
    )
}

export default About
