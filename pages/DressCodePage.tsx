import DressCode from '@/components/DressCode';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DressCodePage: React.FC = () => {
    const colors = ['#9da39e', '#575958', '#483d91', '#3c2bab'];

    // Use inView to trigger animation when the image becomes visible
    const { ref, inView } = useInView({ triggerOnce: true });

    const imageVariants = {
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
            <div className="m-10 mt-0 relative w-screen lg:max-w-[800px] lg:mx-auto">
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div className="flex flex-col justify-center items-center">
                                {/* Animated Image */}
                                <motion.img
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={imageVariants}
                                    src="/images/galeri01.jpg"
                                    alt=""
                                    className="w-[200px] mt-10"
                                />
                                <DressCode
                                    title="DRESSCODE"
                                    description="DENGAN PENUH HORMAT, KAMI MENGAJAK PARA TAMU UNTUK MEMAKAI WARNA-WARNA INI PADA ACARA ISTIMEWA KAMI."
                                    colors={colors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCodePage;
