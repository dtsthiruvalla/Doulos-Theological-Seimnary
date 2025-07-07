import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiUser,
    HiGlobeAlt
} from 'react-icons/hi';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { contactInfo } from '../constants';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
            {/* Page Header */}
            <PageHeader />

            {/* Contact Content */}
            <ContactContent />
        </div>
    );
};

const PageHeader = () => (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Connect with our team to learn how Doulos Theological College can equip you for ministry, leadership, and theological scholarship grounded in the spirit of servanthood.
                </p>
            </motion.div>
        </div>
    </section>
);

const ContactContent = () => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Details */}
                <ContactDetails />

                {/* Enquiry Form */}
                <EnquiryForm />
            </div>
        </div>
    </section>
);

const ContactDetails = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Card>
            <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-400">
                Get in Touch
            </h2>

            <div className="space-y-6">
                {/* Principal Contact */}
                <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                    <div className="flex items-center space-x-3 mb-3">
                        <HiUser className="text-orange-500 flex-shrink-0" size={20} />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Pastor Dr. Benssen V. Yohannan
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Principal & Director</p>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-3">
                    <ContactItem
                        icon={HiPhone}
                        label="Primary Phone"
                        value={contactInfo.phone}
                        href={`tel:${contactInfo.phone}`}
                    />
                    <ContactItem
                        icon={HiPhone}
                        label="Additional Contacts"
                        value={`${contactInfo.additionalPhone}, ${contactInfo.principalPhone}`}
                        href={`tel:${contactInfo.additionalPhone}`}
                    />
                </div>

                {/* Email */}
                <ContactItem
                    icon={HiMail}
                    label="Email"
                    value={contactInfo.email}
                    href={`mailto:${contactInfo.email}`}
                />

                {/* Address */}
                <ContactItem
                    icon={HiLocationMarker}
                    label="Address"
                    value={contactInfo.address}
                    multiline
                />

                {/* Social Media */}
                <div>
                    <div className="flex items-center space-x-3 mb-3">
                        <HiGlobeAlt className="text-orange-500" size={20} />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Social Media
                        </h3>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href={contactInfo.social.instagram}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                        >
                            <FaInstagram size={18} />
                            <span>Instagram</span>
                        </a>
                        <a
                            href={contactInfo.social.facebook}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <FaFacebookF size={18} />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </motion.div>
);

const ContactItem = ({ icon: Icon, label, value, href, multiline = false }) => (
    <div className="flex items-start space-x-3">
        <Icon className="text-orange-500 flex-shrink-0 mt-1" size={20} />
        <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {label}
            </p>
            {href ? (
                <a
                    href={href}
                    className="text-gray-900 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                >
                    {value}
                </a>
            ) : (
                <p className={`text-gray-900 dark:text-white ${multiline ? 'leading-relaxed' : ''}`}>
                    {value}
                </p>
            )}
        </div>
    </div>
);

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        course: '',
        country: '',
        state: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset form
        setFormData({
            name: '',
            contact: '',
            email: '',
            course: '',
            country: '',
            state: '',
        });

        setIsSubmitting(false);
        alert('Thank you for your enquiry! We will get back to you soon.');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Card>
                <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-400">
                    Enquiry Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <FormField
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                    />

                    {/* Contact */}
                    <FormField
                        label="Contact"
                        name="contact"
                        type="tel"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        placeholder="Your phone number"
                    />

                    {/* Email */}
                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                    />

                    {/* Course */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Course
                        </label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                            <option value="">Select a course</option>
                            <option value="bth">B.Th. - Bachelor of Theology</option>
                            <option value="mdiv">M.Div. - Master of Divinity</option>
                            <option value="mth">M.Th. - Master of Theology</option>
                            <option value="dcc">Diploma in Christian Counselling</option>
                            <option value="bcc">Bachelor of Christian Counselling</option>
                            <option value="ma-counselling">MA in Counselling Psychology</option>
                        </select>
                    </div>

                    {/* Country */}
                    <FormField
                        label="Country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Your country"
                    />

                    {/* State */}
                    <FormField
                        label="State"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Your state/region"
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                        size="lg"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </Button>
                </form>
            </Card>
        </motion.div>
    );
};

const FormField = ({ label, name, type, value, onChange, required, placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
    </div>
);

export default Contact;
