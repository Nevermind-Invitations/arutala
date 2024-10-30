import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ImageGridProps {
  images: string[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.3, duration: 0.8, when: 'beforeChildren' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  // Duplicate the images array for seamless scrolling
  const duplicatedImages = [...images, ...images];
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden mt-4"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000, // Swipe every 3 seconds
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {duplicatedImages.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full"
              style={{ flexShrink: 0 }} // Prevents images from shrinking
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageGrid;
