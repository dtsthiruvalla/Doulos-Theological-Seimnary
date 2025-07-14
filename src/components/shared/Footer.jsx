import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { footerLinks, contactInfo } from '../../constants';
import LOGO from '../../assets/logo_Doulos_blue7.png'; // Ensure this path is correct

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-orange-500">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-orange-500">Doulos Theological Seminary</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 justify-center md:justify-start">
                                <HiMail className="text-orange-500" size={18} />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 justify-center md:justify-start">
                                <HiPhone className="text-orange-500" size={18} />
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {contactInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-start space-x-3 justify-center md:justify-start">
                                <HiLocationMarker className="text-orange-500 mt-1" size={18} />
                                <div className="text-gray-300 flex flex-col">
                                    <span>{contactInfo.address}</span>
                                    <span>{contactInfo.address2}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-orange-500">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-gray-800 pt-8 "
                >
                    <div className="max-w-4xl  items-center mx-auto">
                        <p className="text-gray-300 leading-relaxed text-center">
                            Doulos Theological Seminary is a premier theological institution specializing in comprehensive biblical education and ministry training. We help students and ministry leaders develop deep theological understanding, practical ministry skills, and spiritual formation that equips them for effective service in God's kingdom and transformational leadership in their communities.
                        </p>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
                >
                    <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                        <img
                            src={LOGO}
                            alt="Doulos Theological Seminary Logo - Christian Education and Ministry Training"
                            className="h-8 w-auto"
                        />
                        <span className="text-lg font-semibold">Doulos Theological Seminary</span>
                    </div>
                    <div className="text-gray-400 text-center text-sm">
                        © {new Date().getFullYear()} Doulos Theological Seminary. All rights reserved.
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;