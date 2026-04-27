import { useState } from 'react'
import {
    Container,
    Title,
    Text,
    Stack,
    TextInput,
    Textarea,
    Button,
    Badge,
    Group,
    ThemeIcon,
    SimpleGrid,
} from '@mantine/core'
import {
    IconBrandGithub,
    IconMail,
    IconSend,
    IconCheck,
    IconBrandBilibili,
} from '@tabler/icons-react'
import { useLanguage } from '../contexts/LanguageContext'
import classes from './Contact.module.css'
import FadeIn from '../components/FadeIn'

const socialsMeta = [
    {
        icon: IconBrandGithub,
        label: 'GitHub',
        value: 'github.com/skyhaibara',
        href: 'https://github.com/skyhaibara',
        color: '#e6edf3',
    },
    {
        icon: IconMail,
        label: 'Email',
        value: 'skyhabarai@gmail.com',
        href: 'mailto:skyhabarai@gmail.com',
        color: '#a78bfa',
    },
    {
        icon: IconBrandBilibili,
        label: 'Blog',
        value: 'blog.skyhaibara.top',
        href: 'https://blog.skyhaibara.top',
        color: '#60a5fa',
    },
]

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const { t } = useLanguage()
    const c = t.contact

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) return
        const subject = encodeURIComponent(`[Portfolio] Message from ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )
        window.open(`mailto:skyhabarai@gmail.com?subject=${subject}&body=${body}`)
        setSent(true)
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <div className={classes.page}>
            <div className={classes.orb1} />
            <div className={classes.orb2} />

            {/* ── Hero ── */}
            <section className={classes.hero}>
                <Container size="sm">
                    <FadeIn>
                        <Stack align="center" gap="sm">
                            <Badge variant="dot" color="violet" size="lg">
                                {c.badge}
                            </Badge>
                            <Title order={1} className={classes.heroName}>
                                {c.title}
                            </Title>
                            <Text c="dimmed" ta="center" maw={440} lh={1.9}>
                                {c.desc}
                            </Text>
                        </Stack>
                    </FadeIn>
                </Container>
            </section>

            {/* ── Content ── */}
            <section className={classes.section}>
                <Container size="lg">
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="3rem">
                        <FadeIn>
                            <form onSubmit={handleSubmit}>
                                <Stack gap="md">
                                    <TextInput
                                        label={c.labelName}
                                        placeholder={c.placeholderName}
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        classNames={{
                                            input: classes.input,
                                            label: classes.label,
                                        }}
                                        required
                                    />
                                    <TextInput
                                        label={c.labelEmail}
                                        placeholder={c.placeholderEmail}
                                        type="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        classNames={{
                                            input: classes.input,
                                            label: classes.label,
                                        }}
                                        required
                                    />
                                    <Textarea
                                        label={c.labelMessage}
                                        placeholder={c.placeholderMessage}
                                        minRows={5}
                                        autosize
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        classNames={{
                                            input: classes.input,
                                            label: classes.label,
                                        }}
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="md"
                                        variant="gradient"
                                        gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
                                        leftSection={
                                            sent ? <IconCheck size={16} /> : <IconSend size={16} />
                                        }
                                        className={classes.submitBtn}
                                        disabled={sent}
                                    >
                                        {sent ? c.sent : c.send}
                                    </Button>
                                </Stack>
                            </form>
                        </FadeIn>

                        <FadeIn delay={150}>
                            <Stack gap="xl" justify="center">
                                <div>
                                    <Text fw={600} c="white" size="lg" mb={6}>
                                        {c.findTitle}
                                    </Text>
                                    <Text c="dimmed" size="sm" lh={1.7}>
                                        {c.findDesc}
                                    </Text>
                                </div>
                                <Stack gap="md">
                                    {socialsMeta.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classes.socialCard}
                                        >
                                            <Group gap="md">
                                                <ThemeIcon
                                                    size={42}
                                                    radius="md"
                                                    variant="light"
                                                    color="violet"
                                                    style={{ color: s.color, flexShrink: 0 }}
                                                >
                                                    <s.icon size={20} />
                                                </ThemeIcon>
                                                <div>
                                                    <Text fw={600} c="white" size="sm">
                                                        {s.label}
                                                    </Text>
                                                    <Text size="xs" c="dimmed">
                                                        {s.value}
                                                    </Text>
                                                </div>
                                            </Group>
                                        </a>
                                    ))}
                                </Stack>
                            </Stack>
                        </FadeIn>
                    </SimpleGrid>
                </Container>
            </section>

            <footer className={classes.footer}>
                <Text size="sm" c="dimmed">{c.footer}</Text>
            </footer>
        </div>
    )
}

export default Contact
