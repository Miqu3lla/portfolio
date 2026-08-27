import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the user's OS-level reduced-motion preference, and keeps tracking it
 * if they change the setting while the page is open.
 */
export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => window.matchMedia?.(QUERY).matches ?? false
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia?.(QUERY)
        if (!mediaQuery) return

        const onChange = (event) => setPrefersReducedMotion(event.matches)
        mediaQuery.addEventListener('change', onChange)
        return () => mediaQuery.removeEventListener('change', onChange)
    }, [])

    return prefersReducedMotion
}
