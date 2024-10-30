import React from 'react';
import WeddingGift from '@/components/WeddingGift';
import { motion } from 'framer-motion';

const WeddingGiftPage: React.FC = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.8 },
        },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.8 },
        },
    };

    return (
        <section className="flex relative">
            {/* Overlay */}
            <div className="absolute inset-0 mt-[-5px] bg-[#f8f7f7] h-full"></div>

            {/* Content */}
            <div className="mx-10 relative w-screen lg:max-w-[800px] lg:mx-auto">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            {/* Animated Title */}
                            <motion.h1
                                className='text-black text-[30px] mt-6 mb-2 font-edensor'
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                            >
                                Wedding Gift
                            </motion.h1>

                            {/* Animated Description */}
                            <motion.p
                                className='text-black text-[13px] mb-6'
                                initial="hidden"
                                animate="visible"
                                variants={descriptionVariants}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis, illo est modi dolore,
                                dignissimos quis molestiae blanditiis provident velit minus quia doloribus obcaecati dicta!
                            </motion.p>
                            
                            {/* Using the WeddingGift component for different banks */}
                            <WeddingGift bankName="MANDIRI" accountNumber="56789876" accountHolder="Nevermind" />
                            <WeddingGift bankName="BCA" accountNumber="56789876" accountHolder="Nevermind" />
                            <WeddingGift bankName="BNI" accountNumber="56789876" accountHolder="Nevermind" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingGiftPage;
