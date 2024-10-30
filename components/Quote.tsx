import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProfileCardProps {
    imageUrl: string;
    altText: string;
    source: string;
    quote: string;
    additionalInfo: string;
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

const Quote: React.FC<ProfileCardProps> = ({
    imageUrl,
    altText,
    source,
    quote,
    additionalInfo,
}) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="lg:gap-20" ref={ref}>
            <motion.hr
                className="text-black mb-8"
                custom={0}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={itemVariants}
            />
            <motion.div
                className="lg:flex lg:flex-col lg:justify-center"
                custom={1}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={itemVariants}
            >
                <h1 className="text-black text-center text-[28px] my-2 font-edensor">{source}</h1>
                <p className="text-black text-center text-[16px] mb-2 italic font-edensor">{quote}</p>
                <p className="text-black text-center text-[12px] mt-1 mb-4 font-sans">{additionalInfo}</p>
            </motion.div>
            <motion.div
                custom={2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={itemVariants}
            >
                <h1 className="text-gray-900 text-center flex justify-center items-center">
                    <img src={imageUrl} alt={altText} className="w-[200px] lg:w-[300px]" />
                </h1>
            </motion.div>
            <motion.hr
                className="text-black mt-10"
                custom={3}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={itemVariants}
            />
        </div>
    );
};

export default Quote;
