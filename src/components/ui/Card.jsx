import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    hover = true,
    padding = 'md',
    shadow = true,
    ...props
}) => {
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300';

    const paddings = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
    };

    const shadowClasses = shadow ? 'shadow-lg hover:shadow-xl dark:shadow-gray-900/25' : '';

    const classes = `${baseClasses} ${paddings[padding]} ${shadowClasses} ${className}`;

    const hoverAnimation = hover ? {
        whileHover: { y: -5, transition: { duration: 0.2 } },
    } : {};

    return (
        <motion.div
            className={classes}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            {...hoverAnimation}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
