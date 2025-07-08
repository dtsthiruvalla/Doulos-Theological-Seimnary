import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import ajuAlex from '../assets/Administrators/AjuAlexIMG.jpeg';
import lijoBenssen from '../assets/Administrators/MrsLijoBenssenIMG.jpg';


import { programsData } from '../constants';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openProgramModal = (program) => {
        setSelectedProgram(program);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProgram(null);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
            {/* Academic Dean Section */}
            <AcademicDeanSection />

            {/* Theological Programs */}
            <TheologicalProgramsSection onProgramClick={openProgramModal} />

            {/* Counselling Institute */}
            <CounsellingInstituteSection onProgramClick={openProgramModal} />

            {/* Program Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedProgram?.name}
                maxWidth="max-w-6xl"
            >
                {selectedProgram && <ProgramSyllabus program={selectedProgram} />}
            </Modal>
        </div>
    );
};

const AcademicDeanSection = () => (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <img
                                src={ajuAlex}
                                alt="Rev Aju Alex"
                                className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-400">
                                From the Academic Dean's Desk
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                At Doulos Theological Seminary, we are committed to equipping men and women for faithful and effective Christian ministry through rigorous theological education rooted in Scripture and guided by the Holy Spirit. Our academic programs are designed to integrate sound biblical scholarship with practical ministry training, preparing students to serve the Church and society with integrity, compassion, and conviction.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                As the Academic Dean, I take great joy in fostering an environment where academic excellence meets spiritual formation, enabling our students to grow in knowledge, character, and leadership. We invite you to join us on this transformative journey of learning and service for the glory of God.
                            </p>
                            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                                <p className="font-semibold text-gray-900 dark:text-white">Rev Aju Alex</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Academic Dean</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    </section>
);

const TheologicalProgramsSection = ({ onProgramClick }) => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">Theological Programs</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Comprehensive theological education programs designed to equip servant leaders for ministry and mission.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programsData.theological.map((program, index) => (
                    <ProgramCard
                        key={program.id}
                        program={program}
                        index={index}
                        onClick={() => onProgramClick(program)}
                    />
                ))}
            </div>
        </div>
    </section>
);

const CounsellingInstituteSection = () => (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <img
                                src={lijoBenssen}
                                alt="Lijo Benssen"
                                className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-400">
                                From the Administrator's Desk
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Doulos Institute for Counselling and Psychology is committed to equipping individuals with the knowledge, skills, and spiritual foundation needed to serve in the field of Christian counselling. Rooted in biblical truth and integrated with sound psychological principles, our institute offers professional training for those who are called to bring healing, hope, and wholeness to individuals, families, and communities.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                We offer a range of academic and practical programs including the Diploma in Christian Counselling (DCC), Bachelor in Christian Counselling (BCC), and Master of Arts (MA) in Counselling and Psychology. Each program is designed to promote personal transformation and prepare students for effective service in churches, institutions, and clinical settings.
                            </p>
                            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                                <p className="font-semibold text-gray-900 dark:text-white">Mrs Lijo Benssen</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Administrator - Counselling & Psychology</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    </section>
);

const ProgramCard = ({ program, index, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        <Card className="h-full cursor-pointer group" onClick={onClick}>
            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                <img
                    src={program.image || `/api/placeholder/300/200?text=${program.name}`}
                    alt={program.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-400">
                {program.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {program.description}
            </p>
            <Button variant="outline" className="w-full group-hover:bg-blue-800 group-hover:text-white transition-colors">
                View Syllabus
            </Button>
        </Card>
    </motion.div>
);

const ProgramSyllabus = ({ program }) => {
    if (program.syllabus && typeof program.syllabus === 'object' && program.syllabus.Content) {
        return (
            <div className="text-center py-8">
                <p className="text-lg text-gray-600 dark:text-gray-300">{program.syllabus.Content}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                </p>
            </div>

            {Object.entries(program.syllabus).map(([year, semesters]) => (
                <div key={year} className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
                        {year}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(semesters).map(([semester, subjects]) => (
                            <div key={semester} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                                    {semester}
                                </h4>
                                <div className="space-y-2">
                                    {subjects.map((subject, index) => (
                                        <div key={index} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-700 dark:text-gray-300">{subject.subject}</span>
                                            <span className="font-medium text-blue-800 dark:text-blue-400">
                                                {subject.credits} credits
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                                    <div className="flex justify-between items-center font-semibold">
                                        <span>Total Credits:</span>
                                        <span className="text-orange-600">
                                            {subjects.reduce((total, subject) => total + subject.credits, 0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Programs;
