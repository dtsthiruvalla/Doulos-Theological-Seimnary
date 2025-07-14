import { useEffect } from 'react';

const PreloadSEO = () => {
    useEffect(() => {
        // Preload critical SEO resources
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = '/src/assets/logo_Doulos_blue7.png';
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);

        // Add DNS prefetch for external links
        const dnsPrefetchFacebook = document.createElement('link');
        dnsPrefetchFacebook.rel = 'dns-prefetch';
        dnsPrefetchFacebook.href = '//www.facebook.com';
        document.head.appendChild(dnsPrefetchFacebook);

        const dnsPrefetchInstagram = document.createElement('link');
        dnsPrefetchInstagram.rel = 'dns-prefetch';
        dnsPrefetchInstagram.href = '//www.instagram.com';
        document.head.appendChild(dnsPrefetchInstagram);

        const dnsPrefetchBlogspot = document.createElement('link');
        dnsPrefetchBlogspot.rel = 'dns-prefetch';
        dnsPrefetchBlogspot.href = '//doulosseminarylibrary.blogspot.com';
        document.head.appendChild(dnsPrefetchBlogspot);

        // Add viewport meta for mobile optimization
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
        }

        // Add theme color meta tag
        const themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        themeColorMeta.content = '#0047AB';
        document.head.appendChild(themeColorMeta);

        // Add apple touch icon
        const appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        appleTouchIcon.href = '/src/assets/favicon.svg';
        document.head.appendChild(appleTouchIcon);

    }, []);

    return null;
};

export default PreloadSEO;
