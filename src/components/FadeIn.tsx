import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'
import classes from './FadeIn.module.css'

interface Props {
    children: ReactNode
    delay?: number
    className?: string
    style?: CSSProperties
}

const FadeIn = ({ children, delay = 0, className = '', style }: Props) => {
    const { ref, inView } = useInView()
    return (
        <div
            ref={ref}
            className={`${classes.base} ${inView ? classes.visible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}
        >
            {children}
        </div>
    )
}

export default FadeIn
