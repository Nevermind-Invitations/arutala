import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProfileCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  name: string;
  description: string;
  parents: string;
  additionalInfo: string;
  username: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 1,
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  }),
};

const GroomCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  altText,
  title,
  name,
  description,
  parents,
  additionalInfo,
  username,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="mt-10 lg:flex lg:gap-20" ref={ref}>
      <motion.div
        custom={0}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={itemVariants}
        className="lg:flex lg:flex-col lg:justify-center"
      >
        <h2 className="text-black text-center text-[40px] font-oldscientific lg:hidden">{title}</h2>
      </motion.div>
      <motion.div
        custom={1}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={itemVariants}
      >
        <h1 className="text-gray-900 text-center flex justify-center items-center">
          <img src={imageUrl} alt={altText} className="w-[200px] lg:w-[600px] rounded-full" />
        </h1>
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={itemVariants}
        className="lg:flex lg:flex-col lg:justify-center"
      >
        <h1 className="text-black text-center text-[28px] lg:text-[38px] mt-2 font-edensor">{name}</h1>
        <p className="text-black text-center text-[16px] lg:text-[20px] italic font-edensor">{description}</p>
        <p className="text-black text-center text-[16px] font-edensor">{parents}</p>
        <p className="text-black text-center text-[14px] mt-1 font-sans">{additionalInfo}</p>
        <a
          href={`https://www.instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black flex justify-center text-[9px] mt-2 font-sans no-underline"
        >
          @{username}
        </a>
      </motion.div>
    </div>
  );
};

export default GroomCard;
