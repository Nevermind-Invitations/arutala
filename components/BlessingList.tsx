import React from 'react';
import { motion, useInView } from 'framer-motion';

interface Blessing {
    nama: string;
    ucapan: string;
    createdAt: string;
}

interface BlessingListProps {
    blessings: Blessing[];
}

const BlessingList: React.FC<BlessingListProps> = ({ blessings }) => {
    const timeAgo = (date: string) => {
        const now = new Date();
        const secondsPast = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
        
        if (secondsPast < 60) return `${secondsPast} seconds ago`;
        if (secondsPast < 3600) return `${Math.floor(secondsPast / 60)} minutes ago`;
        if (secondsPast < 86400) return `${Math.floor(secondsPast / 3600)} hours ago`;
        return `${Math.floor(secondsPast / 86400)} days ago`;
    };

    return (
        <div className="mt-8 text-white w-full h-[500px] overflow-y-auto">
            {blessings.map((blessing, index) => {
                const ref = React.useRef<HTMLDivElement>(null);
                const isInView = useInView(ref, { once: true });

                return (
                    <motion.div
                        ref={ref}
                        key={index}
                        className="p-2 bg-gray-800 rounded-lg bg-opacity-40 my-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                    >
                        <p className='font-belgiano'>{blessing.nama}</p>
                        <p className='text-[10px] text-gray-300'>{timeAgo(blessing.createdAt)}</p>
                        <p>{blessing.ucapan}</p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default BlessingList;
    