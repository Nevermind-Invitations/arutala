import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DressCodeProps {
  title: string;
  description: string;
  colors: string[]; // Array of color hex codes
}

const DressCode: React.FC<DressCodeProps> = ({ title, description, colors }) => {
  // Create a grid for the colors (4 per row)
  const colorRows = [];
  for (let i = 0; i < colors.length; i += 4) {
    colorRows.push(colors.slice(i, i + 4));
  }

  // Use inView to trigger animation when the component becomes visible
  const { ref, inView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className=""
    >
      <h1 className="text-black text-center text-[30px] mt-6 mb-2 font-edensor">{title}</h1>
      <p className="text-black text-center">{description}</p>
      <table className="w-full mt-3 border-separate border-spacing-1 -ml-[1px]">
        <tbody>
          {colorRows.map((row, index) => (
            <tr key={index} className="w-full h-20">
              {row.map((color, idx) => (
                <th
                  key={idx}
                  style={{ backgroundColor: color }}
                  className={`w-12 h-12 ${idx === 0 ? '-ml-1' : ''} ${idx === row.length - 1 ? '-mr-1' : ''}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default DressCode;
