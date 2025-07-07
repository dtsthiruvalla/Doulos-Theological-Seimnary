import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for scroll-triggered reveal animations
 * Elements start hidden and animate in when scrolled into view
 * @param {Object} options - Animation configuration
 * @param {number} options.y - Initial y offset (default: 50)
 * @param {number} options.opacity - Initial opacity (default: 0)
 * @param {number} options.duration - Animation duration (default: 0.8)
 * @param {string} options.ease - Animation easing (default: 'power2.out')
 * @param {string} options.trigger - ScrollTrigger start position (default: 'top 80%')
 * @param {number} options.delay - Animation delay (default: 0)
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  const {
    y = 50,
    opacity = 0,
    duration = 0.8,
    ease = "power2.out",
    trigger = "top 80%",
    delay = 0,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      y,
      opacity,
    });

    // Create scroll-triggered animation
    const animation = gsap.to(element, {
      y: 0,
      opacity: 1,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: "play none none reverse",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
    };
  }, [y, opacity, duration, ease, trigger, delay]);

  return elementRef;
};

/**
 * Hook for staggered scroll-triggered animations
 * Multiple child elements animate in sequence when scrolled into view
 * @param {Object} options - Animation configuration
 * @param {number} options.stagger - Stagger delay between children (default: 0.1)
 * @param {number} options.y - Initial y offset (default: 30)
 * @param {number} options.opacity - Initial opacity (default: 0)
 * @param {number} options.duration - Animation duration (default: 0.6)
 * @param {string} options.ease - Animation easing (default: 'power2.out')
 * @param {string} options.trigger - ScrollTrigger start position (default: 'top 80%')
 */
export const useStaggerReveal = (options = {}) => {
  const containerRef = useRef(null);

  const {
    stagger = 0.1,
    y = 30,
    opacity = 0,
    duration = 0.6,
    ease = "power2.out",
    trigger = "top 80%",
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get direct children using the children property instead of querySelectorAll
    const children = Array.from(container.children);
    if (children.length === 0) return;

    // Set initial state for all children
    gsap.set(children, {
      y,
      opacity,
    });

    // Create staggered scroll-triggered animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: trigger,
        toggleActions: "play none none reverse",
      },
    });

    timeline.to(children, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
    });

    // Cleanup
    return () => {
      timeline.kill();
    };
  }, [stagger, y, opacity, duration, ease, trigger]);

  return containerRef;
};

export default useScrollReveal;
