# Scroll-Triggered Animation Example

This file shows how to implement the new scroll-triggered reveal animations in the Home page.

## Example: Enhanced IntroBlocks with Scroll-Triggered Animation

Replace the existing `IntroBlocks` component in `src/pages/Home.jsx` with this version:

```jsx
import ScrollReveal from "../components/ScrollReveal"; // Add this import

const IntroBlocks = () => {
  const blocks = [
    {
      icon: HiAcademicCap,
      title: "Theological Excellence",
      description: "Rigorous biblical scholarship.",
    },
    {
      icon: HiUserGroup,
      title: "Academic Leadership",
      description: "Expert faculty guidance.",
    },
    {
      icon: HiLightBulb,
      title: "Community Learning",
      description: "Collaborative environment.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with scroll reveal */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Doulos?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the pillars of our theological education.
          </p>
        </ScrollReveal>

        {/* Cards with staggered scroll reveal */}
        <ScrollReveal
          stagger={true}
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blocks.map((block, index) => (
            <Card key={block.title} className="text-center h-full">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <block.icon className="w-8 h-8 text-blue-800 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {block.description}
              </p>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
```

## Example: AboutDoulosSnippet with Scroll-Triggered Animation

Replace the existing `AboutDoulosSnippet` component with this version:

```jsx
const AboutDoulosSnippet = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content - slides in from left */}
        <ScrollReveal y={30} trigger="top 75%">
          <h2 className="text-4xl font-bold mb-6">About Doulos</h2>
          <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
            Training Disciples
          </h3>
          <h3 className="text-2xl font-semibold text-orange-600 mb-6">
            Transforming Nations
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At Doulos Theological Seminary, Thiruvalla, we are devoted to
            shaping committed servants of Christ who will passionately carry the
            message of the Gospel to the unreached communities across the Indian
            subcontinent.
          </p>
        </ScrollReveal>

        {/* Right content - slides in from right with delay */}
        <ScrollReveal y={30} delay={0.2} trigger="top 75%" className="relative">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/api/placeholder/600/400"
              alt="Seminary Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
```

## How It Works

1. **Import ScrollReveal**: Add `import ScrollReveal from '../components/ScrollReveal';` to your page file
2. **Replace framer-motion**: Remove `motion.div` and `initial/animate/transition` props
3. **Wrap with ScrollReveal**: Use `<ScrollReveal>` with appropriate props
4. **Test scrolling**: Elements will now animate when scrolled into view, not on page load

## Props Reference

- `stagger={true}` - Enables staggered animation for multiple children
- `staggerDelay={0.15}` - Delay between each child animation
- `y={30}` - Initial vertical offset (default: 50)
- `opacity={0}` - Initial opacity (default: 0)
- `duration={0.8}` - Animation duration (default: 0.8)
- `delay={0.2}` - Animation delay (default: 0)
- `trigger="top 75%"` - When animation triggers (default: "top 80%")

The animation will trigger when the element reaches 75% from the top of the viewport and will reverse when scrolling back up.
