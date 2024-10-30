import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ImageGridProps {
    images: string[];
}

const GridPhoto: React.FC<ImageGridProps> = ({ images }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="grid grid-cols-2 gap-2 mt-8 mx-10 lg:grid-cols-3">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Start with the image being invisible and moved down
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Fade in and move into place
                    transition={{ 
                        duration: 1,
                        delay: index * 0.6 // Stagger effect based on index
                    }}
                >
                    <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default GridPhoto;
