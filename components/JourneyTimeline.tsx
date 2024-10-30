import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface JourneyEntry {
  year: string;
  description: string;
}

interface JourneyTimelineProps {
  title: string;
  title2: string;
  entries: JourneyEntry[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.8, when: 'beforeChildren' },
  },
};

const entryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 1, duration: 0.8 },
  }),
};

const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ title, title2, entries }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="mt-10 flex flex-col lg:flex-row lg:justify-between"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="lg:w-1/2">
        <h1 className="text-black text-[28px] leading-[28px] font-edensor">{title}</h1>
        <h1 className="text-black text-[28px] leading-[28px] font-oldscientific">{title2}</h1>
        <hr className="my-3" />
      </div>

      <div className="lg:w-1/2">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={entryVariants}
          >
            <h1 className="text-black text-[18px] my-2 font-edensor">{entry.year}</h1>
            <p className="text-black text-[14px] text-justify">{entry.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default JourneyTimeline;
