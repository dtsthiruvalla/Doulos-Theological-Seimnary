import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiAcademicCap } from 'react-icons/hi';
import Card from '../components/ui/Card';
import { teamData } from '../constants';

const OurTeam = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
            {/* Page Header */}
            <PageHeader />

            {/* Administrators Section */}
            <AdministratorsSection />

            {/* Faculty Section */}
            <FacultySection />

            {/* Office Team Section */}
            <OfficeTeamSection />
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
                <h1 className="text-5xl font-bold mb-6">Our Team</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Meet the dedicated faculty and staff who are committed to excellence in theological education and ministry training.
                </p>
            </motion.div>
        </div>
    </section>
);

const AdministratorsSection = () => (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">Administration</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Leadership committed to academic excellence and spiritual formation
                </p>
            </motion.div>

            {/* Principal - Featured */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <Card className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1 text-center">
                            <img
                                src={teamData.principal.image}
                                alt={teamData.principal.name}
                                className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg mb-4"
                            />
                            <div className="flex flex-wrap justify-center gap-2">
                                {teamData.principal.qualifications.map((qual) => (
                                    <span
                                        key={qual}
                                        className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm"
                                    >
                                        <HiAcademicCap size={14} />
                                        <span>{qual}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-2">{teamData.principal.name}</h3>
                            <p className="text-lg text-blue-800 dark:text-blue-400 mb-4">
                                {teamData.principal.position}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center space-x-2">
                                    <HiMail className="text-orange-500" size={18} />
                                    <a
                                        href={`mailto:${teamData.principal.email}`}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {teamData.principal.email}
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <HiPhone className="text-orange-500" size={18} />
                                    <a
                                        href={`tel:${teamData.principal.phone}`}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {teamData.principal.phone}
                                    </a>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Leading with passion and dedication, our Principal & Director brings decades of theological expertise and ministry experience to guide the seminary towards excellence in biblical education and spiritual formation.
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Other Administrators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamData.administrators.map((admin, index) => (
                    <motion.div
                        key={admin.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <TeamMemberCard member={admin} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FacultySection = () => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">Faculty</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Experienced educators and scholars dedicated to academic excellence
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.faculty.map((faculty, index) => (
                    <motion.div
                        key={faculty.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <TeamMemberCard member={faculty} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const OfficeTeamSection = () => (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">Office Team</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Support staff ensuring smooth operations and student services
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.officeTeam.map((staff, index) => (
                    <motion.div
                        key={staff.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card className="text-center">
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{staff.name}</h3>
                            <p className="text-blue-800 dark:text-blue-400 mb-3">
                                {staff.position}
                            </p>
                            <div className="flex items-center justify-center space-x-2">
                                <HiPhone className="text-orange-500" size={16} />
                                <a
                                    href={`tel:${staff.phone}`}
                                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                >
                                    {staff.phone}
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const TeamMemberCard = ({ member }) => (
    <Card className="text-center h-full">
        <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
        <p className="text-blue-800 dark:text-blue-400 mb-3">
            {member.position}
        </p>
        {member.qualification && (
            <div className="flex justify-center mb-3">
                <span className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    <HiAcademicCap size={14} />
                    <span>{member.qualification}</span>
                </span>
            </div>
        )}
        {member.email && (
            <div className="flex items-center justify-center space-x-2 mb-2">
                <HiMail className="text-orange-500" size={16} />
                <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                >
                    {member.email}
                </a>
            </div>
        )}
        {member.phone && (
            <div className="flex items-center justify-center space-x-2">
                <HiPhone className="text-orange-500" size={16} />
                <a
                    href={`tel:${member.phone}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                >
                    {member.phone}
                </a>
            </div>
        )}
    </Card>
);

export default OurTeam;
