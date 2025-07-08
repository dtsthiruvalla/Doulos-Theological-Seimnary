import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import doulosLogo from '../assets/logo_Doulos_blue7.png'; // Update with actual image path

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
            {/* About Doulos Section */}
            <AboutDoulosSection />

            {/* Quote Box */}
            <QuoteBox />

            {/* Mission, Vision, Values Cards */}
            <MissionVisionValues />
        </div>
    );
};

const AboutDoulosSection = () => (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-6">About Doulos</h1>
                    <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                        Training Disciples
                    </h2>
                    <h2 className="text-2xl font-semibold text-orange-600 mb-8">
                        Transforming Nations
                    </h2>
                    <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                            At Doulos Theological Seminary, Thiruvalla, we are devoted to shaping committed servants of Christ who will passionately carry the message of the Gospel to the unreached communities across the Indian subcontinent. Our mission is rooted in the Great Commission — to train, send, and support men and women called to make disciples and establish Christ-centered churches in places where the Gospel is yet to be heard.
                        </p>
                        <p>
                            With a curriculum deeply anchored in the Word of God and enriched with hands-on ministry experience, we equip our students with a strong biblical foundation, practical ministry skills, and a heart for cross-cultural mission work. We believe theological education should be more than academic — it should be transformational, igniting a lifelong commitment to Christ and His calling.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center"
                >
                    <div className="border border-gray-700 h-60 w-60 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-white dark:bg-gray-900">
                        <img
                            src={doulosLogo}
                            alt="Doulos Logo"
                            className="max-w-full max-h-full object-contain mx-auto"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const QuoteBox = () => (
    <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="text-8xl text-orange-500 mb-6 opacity-50">"</div>
                <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed mb-6">
                    To be a doulos of Christ is not a position of shame, but the highest calling—to willingly bind oneself to the will of the Master.
                </blockquote>
                <div className="text-8xl text-orange-500 rotate-180 opacity-50">"</div>
            </motion.div>
        </div>
    </section>
);

const MissionVisionValues = () => {
    const cards = [
        {
            title: 'Our Mission',
            content: "At Doulos, students become part of a community where spiritual growth, academic excellence, and practical ministry go hand in hand. Our goal is to see every graduate step into the mission field equipped, empowered, and emboldened to serve as agents of spiritual renewal and carriers of God's love, grace, and mercy.",
            icon: '🎯',
        },
        {
            title: 'Our Vision',
            content: 'Inspired by the mandate of 2 Timothy 2:2, our vision is to foster a vibrant and spiritually enriching learning environment where disciple-making is at the core. We are committed to nurturing godly leaders who, in turn, will disciple others — creating a ripple effect of faith, leadership, and service that extends across generations.',
            icon: '👁️',
        },
        {
            title: 'Our Values',
            content: 'At Doulos Theological Seminary, our values are grounded in the life, teachings, and lordship of Jesus Christ. The Greek word "Doulos" means servant or bondslave—and this identity shapes everything we do. We believe that theological education is not just about gaining knowledge but about forming lives that reflect Christ through humble service, faithful leadership, and gospel-centered mission.',
            icon: '💎',
        },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Our Foundation</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Built on biblical principles and guided by the Holy Spirit, our mission, vision, and values shape everything we do.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col text-center">
                                <div className="text-4xl mb-6">{card.icon}</div>
                                <h3 className="text-2xl font-semibold mb-6 text-blue-800 dark:text-blue-400">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                                    {card.content}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
