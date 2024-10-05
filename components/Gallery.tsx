import React from 'react';
import ImageGrid from './ImageGrid';
import SingleImage from './SingleImage';

interface GalleryProps {
    title: string;
    mainImageSrc: string;
    gridImages: string[];
    belowImageSrc: string;
}

const Gallery: React.FC<GalleryProps> = ({ title, mainImageSrc, gridImages, belowImageSrc }) => {
    return (
        <div className='container relative w-screen lg:max-w-[800px] lg:mx-auto'>
            <h1 className='text-white text-[30px] mt-14 m-10 mb-2 font-edensor leading-[32px]'>{title}</h1>

            {/* Main Photo */}
            <SingleImage src={mainImageSrc} alt="Pre-wedding" />

            {/* Image Grid */}
            <ImageGrid images={gridImages} />

            {/* Below Image */}
            <SingleImage src={belowImageSrc} alt="Below Image" />
        </div>
    );
};

export default Gallery;
