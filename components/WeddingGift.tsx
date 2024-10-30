import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BankInfoProps {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
}

const WeddingGift: React.FC<BankInfoProps> = ({ bankName, accountNumber, accountHolder }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber);
        alert(`No.Rek Disalin: ${accountNumber}`); // Alert to notify the user
    };

    // Use inView to trigger animation when the component becomes visible
    const { ref, inView } = useInView({ triggerOnce: true });

    const cardVariants = {
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
            variants={cardVariants}
            className="mb-6" // Added margin for spacing between different bank details
        >
            <div className="flex items-center justify-between py-3">
                <div>
                    <h1 className="text-black leading-[18px]">{bankName}</h1>
                    <h1 className="text-black leading-[18px]">{accountNumber}</h1>
                    <h1 className="text-black leading-[18px]">{accountHolder}</h1>
                </div>
                <div>
                    <button
                        onClick={handleCopy}
                        className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]"
                    >
                        Copy
                    </button>
                </div>
            </div>
            <hr />
        </motion.div>
    );
};

export default WeddingGift;
