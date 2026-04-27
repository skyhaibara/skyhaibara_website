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
import classes from './About.module.css'

const skills = [
    { icon: IconBrandReact, label: 'React', color: '#61dafb' },
    { icon: IconBrandTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: IconBrandNodejs, label: 'Node.js', color: '#68a063' },
    { icon: IconBrandPython, label: 'Python', color: '#ffd43b' },
    { icon: IconBrandGit, label: 'Git', color: '#f05032' },
    { icon: IconBrandDocker, label: 'Docker', color: '#2496ed' },
    { icon: IconBrandVscode, label: 'VS Code', color: '#007acc' },
    { icon: IconTerminal2, label: 'Linux', color: '#fcc624' },
]

const values = [
    {
        icon: IconCode,
        label: 'Clean Code',
        desc: 'I believe great software starts with readable, maintainable code. Clarity is not optional.',
        color: '#a78bfa',
    },
    {
        icon: IconRocket,
        label: 'Ship Fast',
        desc: 'Iterating quickly and getting real feedback beats long planning cycles every time.',
        color: '#60a5fa',
    },
    {
        icon: IconHeart,
        label: 'Open Source',
        desc: 'Building in public, sharing knowledge, and contributing back to the community I learned from.',
        color: '#f472b6',
    },
]

const About = () => {
    return (
        <div className={classes.page}>
            {/* ── Hero ── */}
            <section className={classes.hero}>
                <div className={classes.orb1} />
                <div className={classes.orb2} />
                <Container size="md" className={classes.heroContent}>
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
                                About Me
                            </Badge>
                            <Title order={1} className={classes.heroName}>
                                Hi, I'm skyhaibara
                            </Title>
                            <Text
                                c="dimmed"
                                size="md"
                                ta="center"
                                maw={520}
                                lh={1.9}
                            >
                                A full-stack developer who loves turning ideas
                                into polished digital products. I write code
                                every day, tinker with new tech on weekends,
                                and occasionally blog about what I learn.
                            </Text>
                        </Stack>
                    </Stack>
                </Container>
            </section>

            {/* ── Values ── */}
            <section className={classes.section}>
                <Container size="lg">
                    <Stack gap="3rem">
                        <Stack align="center" gap="sm">
                            <Badge variant="dot" color="violet" size="lg">
                                What I Care About
                            </Badge>
                            <Title order={2} className={classes.sectionTitle}>
                                My Values
                            </Title>
                        </Stack>
                        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                            {values.map((v) => (
                                <div key={v.label} className={classes.valueCard}>
                                    <ThemeIcon
                                        size={48}
                                        radius="md"
                                        variant="light"
                                        color="violet"
                                        mb="md"
                                        style={{ color: v.color }}
                                    >
                                        <v.icon size={24} />
                                    </ThemeIcon>
                                    <Text fw={600} size="lg" c="white" mb={8}>
                                        {v.label}
                                    </Text>
                                    <Text size="sm" c="dimmed" lh={1.7}>
                                        {v.desc}
                                    </Text>
                                </div>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Container>
            </section>

            {/* ── Skills ── */}
            <section className={classes.section}>
                <Container size="lg">
                    <Stack gap="3rem">
                        <Stack align="center" gap="sm">
                            <Badge variant="dot" color="violet" size="lg">
                                Tech Stack
                            </Badge>
                            <Title order={2} className={classes.sectionTitle}>
                                Tools I Use
                            </Title>
                            <Text c="dimmed" ta="center" maw={440} lh={1.7}>
                                The technologies I reach for when building
                                things — from front-end to infrastructure.
                            </Text>
                        </Stack>
                        <SimpleGrid cols={{ base: 2, xs: 4, md: 8 }} spacing="md">
                            {skills.map((s) => (
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

            {/* ── Timeline ── */}
            <section className={classes.section}>
                <Container size="sm">
                    <Stack gap="3rem">
                        <Stack align="center" gap="sm">
                            <Badge variant="dot" color="violet" size="lg">
                                Journey
                            </Badge>
                            <Title order={2} className={classes.sectionTitle}>
                                My Story
                            </Title>
                        </Stack>
                        <Timeline
                            active={3}
                            bulletSize={28}
                            lineWidth={2}
                            color="violet"
                            className={classes.timeline}
                        >
                            <Timeline.Item
                                bullet={<IconRocket size={14} />}
                                title={
                                    <Text fw={600} c="white" size="md">
                                        Started coding
                                    </Text>
                                }
                            >
                                <Text c="dimmed" size="sm" lh={1.7} mt={4}>
                                    Wrote my first lines of Python — instantly
                                    hooked. Spent the next months building
                                    small scripts and automations just for fun.
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                                bullet={<IconCode size={14} />}
                                title={
                                    <Text fw={600} c="white" size="md">
                                        Discovered the web
                                    </Text>
                                }
                            >
                                <Text c="dimmed" size="sm" lh={1.7} mt={4}>
                                    Fell into JavaScript and never looked back.
                                    React clicked immediately — building UIs
                                    felt like assembling Lego.
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                                bullet={<IconBriefcase size={14} />}
                                title={
                                    <Text fw={600} c="white" size="md">
                                        Full-stack development
                                    </Text>
                                }
                            >
                                <Text c="dimmed" size="sm" lh={1.7} mt={4}>
                                    Expanded into Node.js, databases, and
                                    deployment. Started building complete
                                    products from database to UI.
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                                bullet={<IconHeart size={14} />}
                                title={
                                    <Text fw={600} c="white" size="md">
                                        Today
                                    </Text>
                                }
                            >
                                <Text c="dimmed" size="sm" lh={1.7} mt={4}>
                                    Building projects I care about, writing on
                                    my blog, and contributing to open source.
                                    Always learning, always shipping.
                                </Text>
                            </Timeline.Item>
                        </Timeline>
                    </Stack>
                </Container>
            </section>

            {/* ── Personal ── */}
            <section className={classes.section}>
                <Container size="sm">
                    <div className={classes.personalCard}>
                        <div className={classes.personalGlow} />
                        <Group gap="md" mb="lg">
                            <Avatar
                                src="/haibara.ico"
                                size={56}
                                radius="xl"
                            />
                            <div>
                                <Text fw={700} c="white" size="lg">
                                    skyhaibara
                                </Text>
                                <Text size="sm" c="dimmed">
                                    Full-Stack Developer
                                </Text>
                            </div>
                        </Group>
                        <Text c="dimmed" lh={1.9} size="sm">
                            Outside of coding, I enjoy anime, exploring
                            corner-case tech papers, and obsessing over
                            terminal aesthetics. The name "haibara" comes from
                            one of my favourite anime characters — a reminder
                            to stay curious and a bit unpredictable.
                        </Text>
                    </div>
                </Container>
            </section>

            <footer className={classes.footer}>
                <Text size="sm" c="dimmed">
                    © {new Date().getFullYear()} skyhaibara · Built with React
                    & Mantine
                </Text>
            </footer>
        </div>
    )
}

export default About
