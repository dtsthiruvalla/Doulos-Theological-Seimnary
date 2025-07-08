import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

/**
 * AnimatedSection component for adding scroll animations to content
 * @param {Object} props
 * @param {ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type ('fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scaleIn')
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.start - ScrollTrigger start position
 * @param {boolean} props.stagger - Whether to use stagger animation for children
 * @param {number} props.staggerDelay - Stagger delay between children
 * @param {string} props.childSelector - CSS selector for children to animate
 */
const AnimatedSection = ({
    children,
    animation = 'fadeIn',
    delay = 0,
    duration = 0.8,
    className = '',
    start = 'top 85%',
    stagger = false,
    staggerDelay = 0.1,
    childSelector = '> *',
    ease = 'power2.out',
    ...props
}) => {
    const singleRef = useScrollAnimation({
        animation,
        delay,
        duration,
        start,
        ease
    });

    const staggerRef = useStaggerAnimation({
        animation,
        stagger: staggerDelay,
        duration,
        start,
        childSelector,
        ease
    });

    const ref = stagger ? staggerRef : singleRef;

    return (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    );
};

export default AnimatedSection;
