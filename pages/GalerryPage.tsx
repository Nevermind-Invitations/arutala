import Gallery from '@/components/Gallery';
import React from 'react';

const GalleryPage = () => {
    const gridPhoto = [
        '/images/galeri02.jpg',
        '/images/galeri03.jpg',
        '/images/galeri04.jpg',
        '/images/galeri05.jpg',
        '/images/galeri01.jpg',
        '/images/galeri02.jpg',
        '/images/galeri03.jpg',
        '/images/galeri04.jpg',
        '/images/galeri05.jpg',
        '/images/galeri01.jpg'
    ];

    return (
        <section className="flex justify-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#363636] h-full opacity-60"></div>

             {/* Gradasi putih di bagian atas */}
             <div className="absolute top-0 mt-[-6px] left-0 w-full h-[150px] bg-gradient-to-b from-[#f8f7f7] to-transparent"></div>

            {/* Content */}
            <Gallery
            title="Our Pre-wedding Celebration."
            gridPhoto={gridPhoto}
            
        />
        </section>
    );
};

export default GalleryPage;
