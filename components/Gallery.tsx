import React from 'react';
import { motion, useInView } from 'framer-motion';
import ImageGrid from './ImageGrid';
import SingleImage from './SingleImage';
import GridPhoto from './GridPhoto';

interface GalleryProps {
    title: string;
    mainImageSrc?: string;   // Optional
    gridImages?: string[];   // Optional
    gridPhoto?: string[];    // Optional
    belowImageSrc?: string;  // Optional
}

const Gallery: React.FC<GalleryProps> = ({ title, mainImageSrc, gridImages, gridPhoto, belowImageSrc }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='container relative w-screen lg:max-w-[800px] lg:mx-auto'>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1.5 }}
                className='text-white text-[30px] mt-14 m-10 mb-2 font-edensor leading-[32px]'
            >
                {title}
            </motion.h1>

            {/* Main Photo */}
            {mainImageSrc && <SingleImage src={mainImageSrc} alt="Pre-wedding" />}

            {/* Image Grid */}
            {gridImages && <ImageGrid images={gridImages} />}

            {/* Grid Photo */}
            {gridPhoto && <GridPhoto images={gridPhoto} />}

            {/* Below Image */}
            {belowImageSrc && <SingleImage src={belowImageSrc} alt="Below Image" />}
        </div>
    );
};

export default Gallery;
