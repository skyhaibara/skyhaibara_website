import { useEffect, useRef, useState, useCallback } from 'react'
import classes from './LoadingScreen.module.css'

const CFG = {
    particleCount: 76,
    trailSpan: 0.31,
    durationMs: 5300,
    rotationDurationMs: 28000,
    pulseDurationMs: 4400,
    strokeWidth: 4.6,
    roseA: 9.2,
    roseABoost: 0.6,
    roseBreathBase: 0.72,
    roseBreathBoost: 0.28,
    roseScale: 3.25,
}

function rosePoint(progress: number, ds: number) {
    const t = progress * Math.PI * 2
    const a = CFG.roseA + ds * CFG.roseABoost
    const r = a * (CFG.roseBreathBase + ds * CFG.roseBreathBoost) * Math.cos(3 * t)
    return { x: 50 + Math.cos(t) * r * CFG.roseScale, y: 50 + Math.sin(t) * r * CFG.roseScale }
}

function normP(p: number) { return ((p % 1) + 1) % 1 }

function getDS(time: number) {
    const angle = ((time % CFG.pulseDurationMs) / CFG.pulseDurationMs) * Math.PI * 2
    return 0.52 + ((Math.sin(angle + 0.55) + 1) / 2) * 0.48
}

function getRot(time: number) {
    return -((time % CFG.rotationDurationMs) / CFG.rotationDurationMs) * 360
}

function buildPath(ds: number, steps = 480) {
    return Array.from({ length: steps + 1 }, (_, i) => {
        const p = rosePoint(i / steps, ds)
        return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`
    }).join(' ')
}

// playing  → exiting (auto 3.5s): Rose flies left, text spins right
// exiting  → ready   (auto 3.5s + 1.75s): show click/scroll prompt
// ready    → fading  (user click or scroll): backdrop fades
// fading   → onDone  (after 1s)
type Phase = 'playing' | 'exiting' | 'ready' | 'fading'

interface Props { onDone: () => void }

const LoadingScreen = ({ onDone }: Props) => {
    const groupRef = useRef<SVGGElement>(null)
    const pathRef  = useRef<SVGPathElement>(null)
    const rafRef   = useRef<number>(0)
    const [phase, setPhase] = useState<Phase>('playing')

    useEffect(() => {
        const SVG_NS = 'http://www.w3.org/2000/svg'
        const group  = groupRef.current
        const path   = pathRef.current
        if (!group || !path) return

        const particles = Array.from({ length: CFG.particleCount }, () => {
            const c = document.createElementNS(SVG_NS, 'circle')
            c.setAttribute('fill', 'currentColor')
            group.appendChild(c)
            return c
        })

        const startedAt = performance.now()

        function render(now: number) {
            const time     = now - startedAt
            const progress = (time % CFG.durationMs) / CFG.durationMs
            const ds       = getDS(time)

            group!.setAttribute('transform', `rotate(${getRot(time).toFixed(2)} 50 50)`)
            path!.setAttribute('d', buildPath(ds))

            particles.forEach((node, i) => {
                const tail = i / (CFG.particleCount - 1)
                const p    = rosePoint(normP(progress - tail * CFG.trailSpan), ds)
                const fade = Math.pow(1 - tail, 0.56)
                node.setAttribute('cx', p.x.toFixed(2))
                node.setAttribute('cy', p.y.toFixed(2))
                node.setAttribute('r',  (0.9  + fade * 2.7).toFixed(2))
                node.setAttribute('opacity', (0.04 + fade * 0.96).toFixed(3))
            })

            rafRef.current = requestAnimationFrame(render)
        }

        rafRef.current = requestAnimationFrame(render)

        // Auto-trigger exit animation at 3.5s
        const t1 = setTimeout(() => setPhase('exiting'), 3500)
        // Show prompt after spinThrow animation completes (1.75s)
        const t2 = setTimeout(() => setPhase('ready'), 3500 + 1750)

        return () => {
            cancelAnimationFrame(rafRef.current)
            clearTimeout(t1)
            clearTimeout(t2)
            particles.forEach((p) => p.remove())
        }
    }, [])

    const handleEnter = useCallback(() => {
        setPhase('fading')
        setTimeout(() => onDone(), 1000)
    }, [onDone])

    // Listen for scroll/wheel/touch when waiting for user input
    useEffect(() => {
        if (phase !== 'ready') return
        const onWheel = () => handleEnter()
        const onTouch = () => handleEnter()
        window.addEventListener('wheel', onWheel, { once: true })
        window.addEventListener('touchstart', onTouch, { once: true })
        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('touchstart', onTouch)
        }
    }, [phase, handleEnter])

    const isExited = phase === 'exiting' || phase === 'ready' || phase === 'fading'

    return (
        <div
            className={`${classes.overlay} ${phase === 'fading' ? classes.overlayFade : ''}`}
            onClick={phase === 'ready' ? handleEnter : undefined}
            style={{ cursor: phase === 'ready' ? 'pointer' : 'default' }}
        >
            {/* Rose — flies to left once exiting starts */}
            <div className={`${classes.roseWrap} ${isExited ? classes.roseLeft : ''}`}>
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    aria-hidden="true"
                    className={classes.svg}
                >
                    <g ref={groupRef}>
                        <path
                            ref={pathRef}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.12"
                            strokeWidth={CFG.strokeWidth}
                        />
                    </g>
                </svg>

                {phase === 'playing' && (
                    <span className={classes.label}>skyhaibara</span>
                )}
            </div>

            {/* Text spins out automatically when exiting starts */}
            {isExited && (
                <div className={classes.textWrap} aria-hidden="true">
                    <span className={classes.textName}>skyhaibara</span>
                    <span className={classes.textSub}>Full-Stack Developer</span>
                </div>
            )}

            {/* Click / scroll prompt after animation settles */}
            {phase === 'ready' && (
                <div className={classes.enterHint}>
                    <span className={classes.enterDot} />
                    <span className={classes.enterText}>点击或下滑进入</span>
                </div>
            )}
        </div>
    )
}

export default LoadingScreen
