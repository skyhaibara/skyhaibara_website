import { useEffect, useRef, useState } from 'react'

export function useInView(rootMargin = '0px 0px -60px 0px') {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0, rootMargin }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return { ref, inView }
}
