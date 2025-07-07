# Implementation Example - Home Page Animations

Below is an example of how to add the new scroll animations to the Home page. Replace the existing sections with these enhanced versions:

## src/pages/Home.jsx - Enhanced with Animations

```jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiAcademicCap,
  HiUserGroup,
  HiLightBulb,
  HiMail,
  HiPhone,
  HiAcademicCap as HiCertificate,
} from "react-icons/hi";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/AnimatedSection"; // Add this import
import { teamData } from "../constants";

// Example of enhanced IntroBlocks section with animations
const IntroBlocks = () => {
  const blocks = [
    {
      icon: HiAcademicCap,
      title: "Academic Excellence",
      description:
        "Comprehensive theological education with biblical foundation.",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: HiUserGroup,
      title: "Community Focus",
      description:
        "Building strong Christian communities through servant leadership.",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: HiLightBulb,
      title: "Practical Wisdom",
      description:
        "Equipping students with practical ministry skills and wisdom.",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <AnimatedSection animation="slideUp" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Doulos?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the pillars of our theological education that prepare
              servant leaders for ministry.
            </p>
          </div>
        </AnimatedSection>

        {/* Animated Cards with Stagger Effect */}
        <AnimatedSection
          animation="slideUp"
          stagger={true}
          staggerDelay={0.15}
          className="grid md:grid-cols-3 gap-8"
        >
          {blocks.map((block, index) => (
            <Card
              key={index}
              className={`${block.bgColor} border-0 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${block.bgColor} mb-6`}
                >
                  <block.icon className={`w-8 h-8 ${block.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {block.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {block.description}
                </p>
              </div>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

// Example of enhanced Mission, Vision, Values section
const MissionVisionValues = () => {
  const cards = [
    {
      title: "Our Mission",
      content:
        "To prepare servant leaders for ministry through comprehensive theological education grounded in biblical truth.",
      icon: HiAcademicCap,
      color: "blue",
    },
    {
      title: "Our Vision",
      content:
        "To be a leading institution that transforms lives and communities through Christ-centered theological education.",
      icon: HiLightBulb,
      color: "green",
    },
    {
      title: "Our Values",
      content:
        "Biblical truth, academic excellence, servant leadership, community impact, and spiritual formation.",
      icon: HiUserGroup,
      color: "purple",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide our theological education
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="slideUp"
          stagger={true}
          staggerDelay={0.2}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${card.color}-100 dark:bg-${card.color}-900/20 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon
                  className={`w-8 h-8 text-${card.color}-600 dark:text-${card.color}-400`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{card.content}</p>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
```

## Implementation Steps

1. **Import AnimatedSection**: Add the import at the top of your page files
2. **Wrap Content**: Wrap sections that should animate with `<AnimatedSection>`
3. **Choose Animation**: Select appropriate animation type (`fadeIn`, `slideUp`, etc.)
4. **Configure Timing**: Adjust `duration`, `delay`, and `stagger` as needed
5. **Test**: Check animations in browser and adjust for best user experience

## Quick Implementation Checklist

- [ ] Add `import AnimatedSection from '../components/AnimatedSection';` to page files
- [ ] Wrap hero sections with `<AnimatedSection animation="fadeIn">`
- [ ] Wrap card grids with stagger animations
- [ ] Wrap section headers with `slideUp` animation
- [ ] Test all animations on different screen sizes
- [ ] Ensure animations don't interfere with existing functionality
