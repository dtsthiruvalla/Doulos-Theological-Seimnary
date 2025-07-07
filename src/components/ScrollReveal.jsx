import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

/**
 * ScrollReveal component for adding scroll-triggered animations
 * @param {Object} props
 * @param {ReactNode} props.children - Content to animate
 * @param {boolean} props.stagger - Enable stagger animation for children (default: false)
 * @param {number} props.y - Initial y offset (default: 50)
 * @param {number} props.opacity - Initial opacity (default: 0)
 * @param {number} props.duration - Animation duration (default: 0.8)
 * @param {string} props.ease - Animation easing (default: 'power2.out')
 * @param {string} props.trigger - ScrollTrigger start position (default: 'top 80%')
 * @param {number} props.delay - Animation delay (default: 0)
 * @param {number} props.staggerDelay - Stagger delay between children (default: 0.1)
 * @param {string} props.className - Additional CSS classes
 */
const ScrollReveal = ({
    children,
    stagger = false,
    y = 50,
    opacity = 0,
    duration = 0.8,
    ease = 'power2.out',
    trigger = 'top 80%',
    delay = 0,
    staggerDelay = 0.1,
    className = '',
    ...props
}) => {
    const singleRef = useScrollReveal({
        y,
        opacity,
        duration,
        ease,
        trigger,
        delay
    });

    const staggerRef = useStaggerReveal({
        stagger: staggerDelay,
        y,
        opacity,
        duration,
        ease,
        trigger
    });

    const ref = stagger ? staggerRef : singleRef;

    return (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    );
};

export default ScrollReveal;
