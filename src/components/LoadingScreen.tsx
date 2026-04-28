import { useEffect, useRef, useState } from 'react'
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

function rosePoint(progress: number, detailScale: number) {
    const t = progress * Math.PI * 2
    const a = CFG.roseA + detailScale * CFG.roseABoost
    const r = a * (CFG.roseBreathBase + detailScale * CFG.roseBreathBoost) * Math.cos(3 * t)
    return {
        x: 50 + Math.cos(t) * r * CFG.roseScale,
        y: 50 + Math.sin(t) * r * CFG.roseScale,
    }
}

function normP(p: number) {
    return ((p % 1) + 1) % 1
}

function detailScale(time: number) {
    const angle = ((time % CFG.pulseDurationMs) / CFG.pulseDurationMs) * Math.PI * 2
    return 0.52 + ((Math.sin(angle + 0.55) + 1) / 2) * 0.48
}

function rotation(time: number) {
    return -((time % CFG.rotationDurationMs) / CFG.rotationDurationMs) * 360
}

function buildPath(ds: number, steps = 480) {
    return Array.from({ length: steps + 1 }, (_, i) => {
        const p = rosePoint(i / steps, ds)
        return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`
    }).join(' ')
}

interface Props {
    onDone: () => void
}

const LoadingScreen = ({ onDone }: Props) => {
    const groupRef = useRef<SVGGElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const rafRef = useRef<number>(0)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        const SVG_NS = 'http://www.w3.org/2000/svg'
        const group = groupRef.current
        const path = pathRef.current
        if (!group || !path) return

        const particles = Array.from({ length: CFG.particleCount }, () => {
            const c = document.createElementNS(SVG_NS, 'circle')
            c.setAttribute('fill', 'currentColor')
            group.appendChild(c)
            return c
        })

        const startedAt = performance.now()

        function render(now: number) {
            const time = now - startedAt
            const progress = (time % CFG.durationMs) / CFG.durationMs
            const ds = detailScale(time)

            group!.setAttribute('transform', `rotate(${rotation(time).toFixed(2)} 50 50)`)
            path!.setAttribute('d', buildPath(ds))

            particles.forEach((node, i) => {
                const tail = i / (CFG.particleCount - 1)
                const p = rosePoint(normP(progress - tail * CFG.trailSpan), ds)
                const fade = Math.pow(1 - tail, 0.56)
                node.setAttribute('cx', p.x.toFixed(2))
                node.setAttribute('cy', p.y.toFixed(2))
                node.setAttribute('r', (0.9 + fade * 2.7).toFixed(2))
                node.setAttribute('opacity', (0.04 + fade * 0.96).toFixed(3))
            })

            rafRef.current = requestAnimationFrame(render)
        }

        rafRef.current = requestAnimationFrame(render)

        const t1 = setTimeout(() => setFading(true), 3500)
        const t2 = setTimeout(() => onDone(), 4400)

        return () => {
            cancelAnimationFrame(rafRef.current)
            clearTimeout(t1)
            clearTimeout(t2)
            particles.forEach((p) => p.remove())
        }
    }, [onDone])

    return (
        <div className={`${classes.overlay} ${fading ? classes.fading : ''}`}>
            <div className={classes.content}>
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
                <span className={classes.label}>skyhaibara</span>
            </div>
        </div>
    )
}

export default LoadingScreen
