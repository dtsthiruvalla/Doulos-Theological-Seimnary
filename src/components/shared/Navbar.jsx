import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { navigationLinks } from '../../constants';
import LOGO from '../../assets/logo_Doulos_bluef.png'; // Ensure this path is correct   

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20  ">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 focus:outline-none focus-visible:outline-none ">
                        <img
                            src={LOGO}
                            alt="Doulos Theological Seminary Logo - Biblical Education in Thiruvalla"
                            className="h-16 mb-2 scale-120 w-auto transition-transform duration-300 transform"
                        />
                        <div className="hidden sm:block leading-tight ml-2">
                            <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white">
                                Doulos
                                <br />
                                <span className="font-bold text-base">Theological Seminary</span>
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                external={link.external}
                                isActive={location.pathname === link.path}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                            {navigationLinks.map((link) => (
                                <MobileNavLink
                                    key={link.name}
                                    to={link.path}
                                    external={link.external}
                                    isActive={location.pathname === link.path}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </MobileNavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const NavLink = ({ to, children, external, isActive }) => {
    const baseClasses = "relative px-3 py-2 text-sm font-medium transition-colors duration-200  rounded-md";
    const activeClasses = isActive
        ? "text-blue-800 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400";

    if (external) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${activeClasses}`}
            >
                {children}
                {isActive && (
                    <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800 dark:bg-blue-400"
                    />
                )}
            </a>
        );
    }

    return (
        <Link to={to} className={`${baseClasses} ${activeClasses}`}>
            {children}
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800 dark:bg-blue-400"
                />
            )}
        </Link>
    );
};

const MobileNavLink = ({ to, children, external, isActive, onClick }) => {
    const baseClasses = "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:bg-blue-800/10 dark:focus:bg-blue-400/10";
    const activeClasses = isActive
        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800";

    if (external) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${activeClasses}`}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            to={to}
            className={`${baseClasses} ${activeClasses}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default Navbar;
