import React from 'react';

interface SingleImageProps {
    src: string;
    alt: string;
}

const SingleImage: React.FC<SingleImageProps> = ({ src, alt }) => {
    return (
        <div className='main-photo m-10'>
            <img src={src} alt={alt} className='w-full h-auto' />
        </div>
    );
};

export default SingleImage;
