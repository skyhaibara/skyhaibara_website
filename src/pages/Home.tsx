import {
    Container,
    Text,
    Button,
    ThemeIcon,
    Avatar,
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
    IconArrowUpRight,
} from '@tabler/icons-react'
import { useLanguage } from '../contexts/LanguageContext'
import classes from './Home.module.css'
import FadeIn from '../components/FadeIn'

const projectMeta = [
    { tags: ['React', 'TypeScript'], href: 'https://blog.skyhaibara.top' },
    { tags: ['GitHub', 'OSS'],       href: 'https://github.com/skyhaibara' },
    { tags: ['Mantine', 'Vite'],     href: '#' },
]

const techIcons = [
    { icon: IconBrandReact,      label: 'React',      color: '#61dafb' },
    { icon: IconBrandTypescript, label: 'TypeScript',  color: '#3178c6' },
    { icon: IconBrandNodejs,     label: 'Node.js',     color: '#68a063' },
    { icon: IconBrandPython,     label: 'Python',      color: '#ffd43b' },
]

const stats = [
    { num: '3+',  labelEn: 'Years Coding',   labelZh: '年编程经历' },
    { num: '10+', labelEn: 'Projects Built',  labelZh: '个项目作品' },
    { num: '∞',   labelEn: 'Things to Learn', labelZh: '永无止境的探索' },
]

const Home = () => {
    const navigate = useNavigate()
    const { t, lang } = useLanguage()
    const h = t.home

    return (
        <div className={classes.page}>
            {/* ── Hero ────────────────────────────────────────────── */}
            <section className={classes.hero}>
                <div className={classes.orb1} />
                <div className={classes.orb2} />
                <div className={classes.orb3} />

                <div className={classes.heroInner}>
                    <FadeIn>
                        {/* Eyebrow */}
                        <div className={classes.heroEyebrow}>
                            <Avatar
                                src="/haibara.ico"
                                size={36}
                                radius="xl"
                                className={classes.eyebrowAvatar}
                            />
                            <span className={classes.eyebrowDot} />
                            <span className={classes.eyebrowText}>
                                {lang === 'en' ? 'Portfolio — 2025' : '作品集 — 2025'}
                            </span>
                        </div>

                        {/* Display name */}
                        <h1 className={classes.displayName}>
                            skyhaibara<span />
                        </h1>

                        <div className={classes.heroDivider} />

                        {/* Meta row */}
                        <div className={classes.heroMeta}>
                            <div className={classes.heroLeft}>
                                <p className={classes.heroSub}>{h.heroSub}</p>
                                <p className={classes.heroDesc}>{h.heroDesc}</p>
                                <div className={classes.heroActions}>
                                    <a
                                        href="https://blog.skyhaibara.top"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.ctaLink}
                                    >
                                        {h.visitBlog}
                                        <IconArrowUpRight size={14} />
                                    </a>
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className={`${classes.ctaLink} ${classes.ctaLinkSecondary}`}
                                    >
                                        {h.getInTouch}
                                        <IconArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className={classes.heroRight}>
                                <div className={classes.techRow}>
                                    {techIcons.map((t) => (
                                        <ThemeIcon
                                            key={t.label}
                                            size="md"
                                            radius="md"
                                            variant="transparent"
                                            style={{ color: t.color }}
                                            title={t.label}
                                        >
                                            <t.icon size={18} />
                                        </ThemeIcon>
                                    ))}
                                </div>
                                <div className={classes.scrollHint}>
                                    <IconArrowDown size={15} className={classes.scrollIcon} />
                                    <Text size="xs" c="dimmed">scroll</Text>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Stats strip ─────────────────────────────────────── */}
            <FadeIn>
                <div className={classes.statsStrip}>
                    <Container size="lg">
                        <div className={classes.statsGrid}>
                            {stats.map((s) => (
                                <div key={s.num} className={classes.statItem}>
                                    <div className={classes.statNum}>{s.num}</div>
                                    <div className={classes.statLabel}>
                                        {lang === 'en' ? s.labelEn : s.labelZh}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </FadeIn>

            {/* ── Projects list ────────────────────────────────────── */}
            <FadeIn>
                <section className={classes.section}>
                    <Container size="lg">
                        <div className={classes.sectionHeader}>
                            <span className={classes.sectionLabel}>{h.projectsBadge}</span>
                            <span className={classes.sectionCount}>
                                {String(h.projects.length).padStart(2, '0')}
                            </span>
                        </div>

                        <ul className={classes.projectsList}>
                            {h.projects.map((p, i) => (
                                <li key={p.title}>
                                    <a
                                        href={projectMeta[i].href}
                                        target={projectMeta[i].href !== '#' ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className={classes.projectItem}
                                    >
                                        <span className={classes.projectNum}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className={classes.projectBody}>
                                            <span className={classes.projectTitle}>{p.title}</span>
                                            <span className={classes.projectDesc}>{p.desc}</span>
                                            <div className={classes.projectTagRow}>
                                                {projectMeta[i].tags.map((tag) => (
                                                    <span key={tag} className={classes.projectTag}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <IconArrowUpRight
                                            size={20}
                                            className={classes.projectArrow}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>
            </FadeIn>

            {/* ── CTA ─────────────────────────────────────────────── */}
            <FadeIn>
                <section className={classes.ctaBig}>
                    <div className={classes.ctaBigGlow} />
                    <Container size="lg">
                        <h2 className={classes.ctaDisplay}>{h.ctaTitle}</h2>
                        <p className={classes.ctaSubtext}>{h.ctaDesc}</p>
                        <div className={classes.ctaButtonRow}>
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
                        </div>
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