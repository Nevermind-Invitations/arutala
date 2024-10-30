import React from 'react';
import { motion, useInView } from 'framer-motion';
import Footer from '@/components/Footer';
import InstagramIcon from '@/public/svg/InstagramIcon';
import PhoneIcon from '@/public/svg/PhoneIcon';
import WebsiteIcon from '@/public/svg/WebsiteIcon';

const LastPage: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="h-screen flex relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 mt-0 relative w-screen lg:max-w-[800px] lg:mx-auto" ref={ref}>
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <motion.h1
                                className='text-white text-[30px] text-center mt-16 mb-2 font-edensor leading-[32px]'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                                transition={{ duration: 1 }}
                            >
                                Thank You for Your Attendance and Support
                            </motion.h1>
                            
                            <motion.p
                                className='text-gray-200 text-[16px] text-justify'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                Terima kasih telah meluangkan waktu untuk membaca undangan ini. Kehadiran Anda akan membuat momen spesial kami semakin berharga, dan kami sangat menantikan kehadiran Anda!
                            </motion.p>
                            
                            <motion.h1
                                className='text-white text-[40px] text-center mt-16 mb-2 font-oldscientific leading-[32px]'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                Yoga & Irma
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer
                phoneIcon={<PhoneIcon className="w-3 h-3 text-gray-200" />}
                instagramIcon={<InstagramIcon className="w-3 h-3 text-gray-200" />}
                websiteIcon={<WebsiteIcon className="w-3 h-3 text-gray-200" />}
            />
        </section>
    );
};

export default LastPage;
