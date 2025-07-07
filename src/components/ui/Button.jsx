import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    external = false,
    className = '',
    disabled = false,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-blue-800 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl',
        secondary: 'bg-stone-700 hover:bg-stone-600 text-white focus:ring-stone-500 shadow-lg hover:shadow-xl',
        accent: 'bg-orange-500 hover:bg-orange-400 text-white focus:ring-orange-500 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-600 focus:ring-blue-500',
        ghost: 'text-blue-800 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 focus:ring-blue-500',
    };

    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const MotionComponent = motion.button;

    if (href) {
        if (external) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    {...props}
                >
                    {children}
                </motion.a>
            );
        }

        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <MotionComponent
            onClick={onClick}
            disabled={disabled}
            className={classes}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};

export default Button;
