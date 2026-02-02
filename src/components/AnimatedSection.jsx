import { useScrollAnimation, animations } from '../hooks/useScrollAnimation';

/**
 * AnimatedSection Component
 * Wraps content and animates it when it scrolls into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'fadeIn', 'scaleUp'
 * @param {string} props.className - Additional classes
 * @param {number} props.delay - Animation delay in ms (for staggered effects)
 * @param {string} props.duration - Tailwind duration class (e.g., 'duration-500')
 */
export default function AnimatedSection({ 
    children, 
    animation = 'fadeUp', 
    className = '', 
    delay = 0,
    duration = 'duration-700'
}) {
    const [ref, isVisible] = useScrollAnimation();
    const animationConfig = animations[animation] || animations.fadeUp;

    return (
        <div
            ref={ref}
            className={`
                transition-all ${duration} ease-out
                ${isVisible ? animationConfig.visible : animationConfig.hidden}
                ${className}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
