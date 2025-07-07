import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll animations
 * @param {Object} options - Animation options
 * @param {string} options.animation - Type of animation ('fadeIn', 'slideUp', 'slideLeft', 'slideRight')
 * @param {number} options.delay - Delay in seconds
 * @param {number} options.duration - Duration in seconds
 * @param {string} options.start - ScrollTrigger start position
 * @param {string} options.end - ScrollTrigger end position
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  const {
    animation = "fadeIn",
    delay = 0,
    duration = 0.8,
    start = "top 85%",
    end = "bottom 15%",
    ease = "power2.out",
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const initialState = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 50 },
      slideLeft: { opacity: 0, x: -50 },
      slideRight: { opacity: 0, x: 50 },
      scaleIn: { opacity: 0, scale: 0.8 },
    };

    const finalState = {
      fadeIn: { opacity: 1 },
      slideUp: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scaleIn: { opacity: 1, scale: 1 },
    };

    // Set initial state
    gsap.set(element, initialState[animation]);

    // Create scroll trigger animation
    const scrollTrigger = gsap.to(element, {
      ...finalState[animation],
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    });

    // Cleanup function
    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay, duration, start, end, ease]);

  return elementRef;
};

/**
 * Stagger animation hook for multiple elements
 * @param {Object} options - Animation options
 */
export const useStaggerAnimation = (options = {}) => {
  const containerRef = useRef(null);

  const {
    animation = "slideUp",
    stagger = 0.1,
    duration = 0.6,
    start = "top 85%",
    childSelector = "> *",
    ease = "power2.out",
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) return;

    // Set initial state based on animation type
    const initialState = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 30 },
      slideLeft: { opacity: 0, x: -30 },
      slideRight: { opacity: 0, x: 30 },
      scaleIn: { opacity: 0, scale: 0.9 },
    };

    const finalState = {
      fadeIn: { opacity: 1 },
      slideUp: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scaleIn: { opacity: 1, scale: 1 },
    };

    // Set initial state for all children
    gsap.set(children, initialState[animation]);

    // Create stagger animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none reverse",
      },
    });

    timeline.to(children, {
      ...finalState[animation],
      duration,
      stagger,
      ease,
    });

    // Cleanup function
    return () => {
      timeline.kill();
    };
  }, [animation, stagger, duration, start, childSelector, ease]);

  return containerRef;
};
