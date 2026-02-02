import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Once visible, stay visible (only animate once)
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isVisible];
}

/**
 * Animation variants for different effects
 */
export const animations = {
    fadeUp: {
        hidden: 'opacity-0 translate-y-10',
        visible: 'opacity-100 translate-y-0'
    },
    fadeDown: {
        hidden: 'opacity-0 -translate-y-10',
        visible: 'opacity-100 translate-y-0'
    },
    fadeLeft: {
        hidden: 'opacity-0 translate-x-10',
        visible: 'opacity-100 translate-x-0'
    },
    fadeRight: {
        hidden: 'opacity-0 -translate-x-10',
        visible: 'opacity-100 translate-x-0'
    },
    fadeIn: {
        hidden: 'opacity-0',
        visible: 'opacity-100'
    },
    scaleUp: {
        hidden: 'opacity-0 scale-95',
        visible: 'opacity-100 scale-100'
    }
};
