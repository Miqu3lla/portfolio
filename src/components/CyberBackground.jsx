import { useCallback, useMemo } from 'react'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadStarsPreset } from '@tsparticles/preset-stars'

// Defined once at module scope so the reference stays stable across renders,
// as required by ParticlesProvider.
async function initEngine(engine) {
    await loadStarsPreset(engine)
}

/**
 * CyberBackground
 * Fixed, decorative backdrop for the whole page: a twinkling starfield with
 * neon-cyan shooting stars, matching the Cyber-Noir theme. Purely
 * presentational — sits behind all content, no interaction.
 */
export default function CyberBackground() {
    const options = useMemo(() => ({
        preset: 'stars',
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
            color: { value: ['#00dbe9', '#d0bcff', '#ffffff'] },
            number: { value: 90 },
            opacity: { value: { min: 0.15, max: 0.7 } },
            size: { value: { min: 0.5, max: 1.6 } },
            move: { speed: 0.25 },
            twinkle: {
                particles: { enable: true, color: '#00dbe9', frequency: 0.05, opacity: 1 },
            },
        },
    }), [])

    const particlesLoaded = useCallback(() => Promise.resolve(), [])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
            <ParticlesProvider init={initEngine}>
                <Particles
                    id="cyber-background"
                    options={options}
                    particlesLoaded={particlesLoaded}
                    className="w-full h-full"
                />
            </ParticlesProvider>
        </div>
    )
}
