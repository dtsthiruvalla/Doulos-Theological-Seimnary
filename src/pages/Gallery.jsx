import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Gallery = () => {
    // Generate placeholder gallery items
    const galleryItems = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        caption: `Basic Caption ${index + 1}`,
        date: `July ${(index % 31) + 1}, 2025`,
    }));

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
            {/* Page Header */}
            <PageHeader />

            {/* Gallery Grid */}
            <GalleryGrid items={galleryItems} />
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
                <h1 className="text-5xl font-bold mb-6">Gallery Section Under Development</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    This section is currently being developed. Please check back soon for updates showcasing campus life, events, and student activities at Doulos Theological Seminary.
                </p>
            </motion.div>
        </div>
    </section>
);

const GalleryGrid = ({ items }) => (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <GalleryItem item={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const GalleryItem = ({ item }) => (
    <Card className="overflow-hidden group cursor-pointer">
        <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 mb-4 rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
                <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">📷</div>
                <p className="text-lg font-medium text-blue-800 dark:text-blue-300">
                    For testing purposes
                </p>
            </div>
        </div>

        <div className="px-2 pb-2">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.caption}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.date}
            </p>
        </div>
    </Card>
);

export default Gallery;
