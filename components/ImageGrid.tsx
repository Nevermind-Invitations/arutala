import React from 'react';

interface ImageGridProps {
    images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className='overflow-hidden mt-4'>
            <div className='flex'>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Foto ${index + 1}`} className='w-2/5 mx-2' />
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;
