# Animation Usage Guide

## Overview

The Doulos Theological Seminary website now includes GSAP-powered scroll animations that create engaging, professional transitions as users scroll through the content.

## Components

### AnimatedSection Component

Use this component to wrap content that should animate on scroll.

#### Basic Usage

```jsx
import AnimatedSection from '../components/AnimatedSection';

// Simple fade-in animation
<AnimatedSection animation="fadeIn">
  <h2>This content will fade in on scroll</h2>
</AnimatedSection>

// Slide up animation with custom timing
<AnimatedSection
  animation="slideUp"
  duration={1.2}
  delay={0.2}
>
  <div className="card">
    <h3>This card slides up</h3>
  </div>
</AnimatedSection>
```

#### Animation Types

- `fadeIn` - Simple opacity transition
- `slideUp` - Slides up from below with fade
- `slideLeft` - Slides in from the left
- `slideRight` - Slides in from the right
- `scaleIn` - Scales up from smaller size with fade

#### Stagger Animation

For animating multiple children elements with a staggered effect:

```jsx
<AnimatedSection
  animation="slideUp"
  stagger={true}
  staggerDelay={0.1}
  className="grid grid-cols-3 gap-6"
>
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
</AnimatedSection>
```

## Implementation Examples

### Homepage Info Cards

```jsx
<AnimatedSection
  animation="slideUp"
  stagger={true}
  staggerDelay={0.15}
  className="grid lg:grid-cols-3 gap-8"
>
  {infoCards.map((card, index) => (
    <Card key={index}>{/* Card content */}</Card>
  ))}
</AnimatedSection>
```

### Team Member Profiles

```jsx
<AnimatedSection
  animation="fadeIn"
  stagger={true}
  staggerDelay={0.2}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {teamMembers.map((member, index) => (
    <TeamCard key={index} member={member} />
  ))}
</AnimatedSection>
```

### Section Headers

```jsx
<AnimatedSection animation="slideUp" duration={0.8}>
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold">Our Programs</h2>
    <p className="text-gray-600 mt-4">
      Discover our theological education offerings
    </p>
  </div>
</AnimatedSection>
```

## Props Reference

### AnimatedSection Props

- `animation` (string): Animation type ('fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scaleIn')
- `delay` (number): Delay before animation starts (in seconds)
- `duration` (number): Animation duration (in seconds)
- `start` (string): ScrollTrigger start position (default: 'top 85%')
- `stagger` (boolean): Enable stagger animation for children
- `staggerDelay` (number): Delay between staggered children (in seconds)
- `childSelector` (string): CSS selector for children to animate (default: '> \*')
- `ease` (string): Animation easing function (default: 'power2.out')
- `className` (string): Additional CSS classes

## Best Practices

1. **Consistency**: Use similar animation types throughout the site for a cohesive feel
2. **Performance**: Don't overuse animations - apply them to key sections and components
3. **Timing**: Keep durations between 0.6-1.2 seconds for most content
4. **Stagger**: Use stagger delays of 0.1-0.2 seconds for optimal visual flow
5. **Accessibility**: Animations respect user's prefers-reduced-motion preferences

## Performance Notes

- Animations are hardware-accelerated using GSAP
- ScrollTrigger efficiently manages scroll events
- Animations are automatically cleaned up when components unmount
