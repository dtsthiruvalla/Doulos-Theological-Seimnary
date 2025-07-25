import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    HiAcademicCap,
    HiUserGroup,
    HiLightBulb,
    HiMail,
    HiPhone,
    HiAcademicCap as HiCertificate
} from 'react-icons/hi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import doulosLogo from '../assets/logo_Doulos_blue7.png';
import { teamData } from '../constants';

const Home = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <SEO
                title="Doulos Theological Seminary - Biblical Education & Ministry Training"
                description="Doulos Theological Seminary in Thiruvalla offers comprehensive biblical education and ministry training. Join our B.Th, M.Div, and M.Th programs for spiritual growth and theological excellence."
                keywords="Doulos Theological Seminary, theological education, biblical studies, ministry training, Thiruvalla, Kerala, Christian education, seminary, divinity school"
                canonical="https://dtsthiruvalla.com"
                ogTitle="Doulos Theological Seminary - Biblical Education & Ministry Training"
                ogDescription="Doulos Theological Seminary in Thiruvalla offers comprehensive biblical education and ministry training. Join our B.Th, M.Div, and M.Th programs for spiritual growth and theological excellence."
                ogImage="https://dtsthiruvalla.com/src/assets/logo_Doulos_blue7.png"
            />

            {/* Hero Section */}
            <HeroSection />


            {/* Intro Blocks */}
            <IntroBlocks />


            {/* About Doulos Snippet */}
            <AboutDoulosSnippet />

            {/* Quote Box */}
            <QuoteBox />

            {/* Mission, Vision, Values Cards */}
            <MissionVisionValues />

            {/* Principal & Director's Message */}
            <PrincipalMessage />

            {/* Admission Section */}
            <AdmissionSection />

            {/* Director & Principal Details */}
            <DirectorDetails />

            {/* Contact Snippet */}
            <ContactSnippet />
        </main>
    );
};

const AdmissionMarquee = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full flex justify-center mt-4"
    >
        <div className="relative overflow-hidden rounded-lg shadow border border-blue-200/20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-0.5 py-0.5 max-w-xl w-full">
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{
                    delay: 1.5,
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="whitespace-nowrap py-2 px-4 flex items-center"
            >
                <span className="text-base md:text-lg font-semibold tracking-wide text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                    ADMISSION OPEN FOR NEW SEMESTER
                    <span className="inline-block w-2 h-2 bg-orange-400 rounded-full ml-2 animate-pulse"></span>
                </span>
            </motion.div>
        </div>
    </motion.div>
);

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-900 via-blue-800 to-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="block text-white mb-2">Doulos Theological Seminary</span>
                    <span className="block text-3xl md:text-4xl">Step into your{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Calling
                        </span>
                    </span>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
                >
                    Begin your journey of spiritual growth and academic excellence at Doulos Theological Seminary, Thiruvalla.
                </motion.p>
            </motion.div>
            {/* Call to Action Buttons */}
            <CallToActionButtons />
            {/* Admission Marquee */}
            <AdmissionMarquee />
        </div>


        {/* Scroll Indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </motion.div>
        </motion.div>
    </section>
);

const IntroBlocks = () => {
    const blocks = [
        {
            icon: HiAcademicCap,
            title: 'Theological Excellence',
            description: 'Rigorous biblical scholarship.',
        },
        {
            icon: HiUserGroup,
            title: 'Academic Leadership',
            description: 'Expert faculty guidance.',
        },
        {
            icon: HiLightBulb,
            title: 'Community Learning',
            description: 'Collaborative environment.',
        },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Doulos Theological Seminary?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover the pillars of our theological education at Doulos Theological Seminary.
                    </p>
                </ScrollReveal>

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
                            <p className="text-gray-600 dark:text-gray-300">{block.description}</p>
                        </Card>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
};

const CallToActionButtons = () => (
    <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Button href="/contact" variant='accent' size="lg">
                    Contact Us
                </Button>
                <Button href="/about" variant="outline" size="lg">
                    Learn More
                </Button>
            </motion.div>
        </div>
    </section>
);

const AboutDoulosSnippet = () => (
    <article className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">About Doulos Theological Seminary</h2>
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                        Training Disciples
                    </h3>
                    <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                        Transforming Nations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        At Doulos Theological Seminary, Thiruvalla, we are devoted to shaping committed servants of Christ who will passionately carry the message of the Gospel to the unreached communities across the Indian subcontinent. Our mission is rooted in the Great Commission — to train, send, and support men and women called to make disciples and establish Christ-centered churches in places where the Gospel is yet to be heard.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className=" border border-gray-700  h-60 w-60 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={doulosLogo}
                            alt="Doulos Theological Seminary Logo - Biblical Education and Ministry Training in Thiruvalla"
                            className="w-60 h-60 object-cover mx-auto "
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </article>
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
                <div className="text-6xl text-orange-500 mb-4">"</div>
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
                    To be a doulos of Christ is not a position of shame, but the highest calling—to willingly bind oneself to the will of the Master.
                </blockquote>
                <div className="text-6xl text-orange-500 mt-4 rotate-180">"</div>
            </motion.div>
        </div>
    </section>
);

const MissionVisionValues = () => {
    const cards = [
        {
            title: 'Our Mission',
            content: "At Doulos, students become part of a community where spiritual growth, academic excellence, and practical ministry go hand in hand. Our goal is to see every graduate step into the mission field equipped, empowered, and emboldened to serve as agents of spiritual renewal and carriers of God's love, grace, and mercy.",
        },
        {
            title: 'Our Vision',
            content: 'Inspired by the mandate of 2 Timothy 2:2, our vision is to foster a vibrant and spiritually enriching learning environment where disciple-making is at the core. We are committed to nurturing godly leaders who, in turn, will disciple others — creating a ripple effect of faith, leadership, and service that extends across generations.',
        },
        {
            title: 'Our Values',
            content: 'At Doulos Theological Seminary, our values are grounded in the life, teachings, and lordship of Jesus Christ. The Greek word "Doulos" means servant or bondslave—and this identity shapes everything we do. We believe that theological education is not just about gaining knowledge but about forming lives that reflect Christ through humble service, faithful leadership, and gospel-centered mission.',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col">
                                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
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

const PrincipalMessage = () => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-400">
                        Director & Principal's Message
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            At Doulos Theological Seminary, we are committed to equipping and empowering servant-leaders for the glory of God. Rooted in the biblical mandate to be 'doulos' (δοῦλος) – bondservants of Christ (Romans 1:1), our mission is to train men and women who will faithfully serve the Church and the world with sound doctrine, Christlike character, and a passion for the Gospel.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            As Jesus Himself declared, "Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all" (Mark 10:43-44). This principle of servant leadership guides our academic programs, ministry training, and spiritual formation.
                        </p>
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">In His service,</p>
                            <p className="font-semibold text-gray-900 dark:text-white">Pastor Dr. Benssen V Yohannan</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">BA, M.Div, M.Th, D.Min, PhD</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Director & Principal</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Doulos Theological Seminary, Thiruvalla</p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    </section>
);

const AdmissionSection = () => {
    const admissionCards = [
        {
            title: 'Admission & Renewal',
            content: 'The admission process at Doulos Theological Seminary (DTS) ensures that candidates have the opportunity to join our academic community based on their academic performance and commitment. Admission to DTS is provisional and subject to the academic performance of the candidate. Renewal of admission occurs on an annual basis. All applicants are required to take a written entrance exam consisting of three separate papers: General Knowledge, Christian Faith, and English (for English medium candidates). M. Div. candidates must also sit for a Departmental Exam.',
        },
        {
            title: 'Application Requirements',
            content: 'To complete the application, candidates should submit: 1. Duly filled application form; 2. Three recent passport-size photographs; 3. Church membership and Conduct certificate from Local pastor on the church letterhead; 4. Attested copies of certificates with mark lists; 5. Certificate for age proof; 6. Three filled Reference forms: one each from a theological teacher with a recognized M.Th./Ph.D., a Christian friend, and a local pastor; 7. Certified medical certificate; 8. Personal Testimony (one page).',
        },
        {
            title: 'Course Requirements',
            content: 'Students at DTS are expected to adhere to the following general course requirements: Regular class attendance is essential. All requirements set by the Academic Committee for the specific course must be met. Satisfactory completion of assignments, classwork, and assessments according to academic committee rules. At Doulos Theological Seminary, we value the dedication and commitment of our students to their theological education.',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Admission Information
                </motion.h2>
                <div className="space-y-8">
                    {admissionCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card>
                                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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

const DirectorDetails = () => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="text-center">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 flex justify-center items-center w-32 h-32">
                            <img
                                src={teamData.principal.image}
                                alt="Pastor Dr. Benssen V. Yohannan - Director and Principal of Doulos Theological Seminary"
                                className="w-32 h-32 rounded-full object-cover object-center shadow-lg"
                            />
                        </div>
                        <div className="flex-grow text-left">
                            <h3 className="text-2xl font-bold mb-2">{teamData.principal.name}</h3>
                            <p className="text-lg text-blue-800 dark:text-blue-400 mb-4">
                                {teamData.principal.position}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

                            <div className="flex flex-wrap gap-2">
                                {teamData.principal.qualifications.map((qual) => (
                                    <span
                                        key={qual}
                                        className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm"
                                    >
                                        <HiCertificate size={14} />
                                        <span>{qual}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    </section>
);

const ContactSnippet = () => (
    <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">Request a Callback</h3>
                    <p className="text-gray-200 leading-relaxed mb-8">
                        Connect with our team to learn how Doulos Theological Seminary can equip you for ministry, leadership, and theological scholarship grounded in the spirit of servanthood.
                    </p>
                    <Button href="/contact" variant="accent" size="lg">
                        Get In Touch
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <h3 className="text-xl font-semibold mb-6 text-white">Quick Enquiry</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option value="">Select Course</option>
                                <option value="bth">B.Th.</option>
                                <option value="mdiv">M.Div.</option>
                                <option value="mth">M.Th.</option>
                                <option value="counselling">Counselling Programs</option>
                            </select>
                            <Button type="submit" variant="accent" className="w-full">
                                Submit Enquiry
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Home;
