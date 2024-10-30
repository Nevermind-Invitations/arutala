import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import HeroHeader from '@/components/HeroHeader';
import HeroGuest from '@/components/HeroGuest';
import Countdown from '@/components/Countdown';

interface HeroProps {
    onInvitationOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvitationOpen }) => {
    const targetDate = '2024-10-10T20:25:00';
    const [isInvitationOpen, setIsInvitationOpen] = useState(false);
    const [isIntroVisible, setIsIntroVisible] = useState(true);
    const router = useRouter();
    const guestName = router.query.to ? decodeURIComponent(router.query.to as string).replace(/\+/g, ' ') : 'Nama Tamu';

    const introRef = useRef<HTMLDivElement>(null); // Membuat ref untuk transisi intro
    const invitationRef = useRef<HTMLDivElement>(null); // Membuat ref untuk konten undangan

    useEffect(() => {
        // Sembunyikan intro setelah 7,5 detik
        const introTimer = setTimeout(() => {
            setIsIntroVisible(false);
        }, 5000);

        return () => {
            clearTimeout(introTimer);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isInvitationOpen ? 'auto' : 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isInvitationOpen]);

    const handleOpenInvitation = () => {
        setIsInvitationOpen(true);
        onInvitationOpen();
    };

    // Animasi Framer Motion untuk typewriter
    const typewriterVariant = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.3, // Durasi animasi per huruf
            }
        },
    };

    const intro = " Yoga & Irma"; // Teks yang akan dianimasikan

    return (
        <div className="min-h-screen justify-center bg-cover bg-center bg-no-repeat h-screen">
            {/* Transisi untuk Intro */}
            <CSSTransition
                nodeRef={introRef} // Menggunakan nodeRef
                in={isIntroVisible}
                timeout={4000} // Durasi transisi 4 detik
                classNames="fade"
                unmountOnExit
            >
                <div ref={introRef} className="fixed inset-0 flex justify-center items-center bg-black text-white text-3xl z-50 transition-opacity">
                    <motion.h1
                        className="font-abigail"
                        initial="hidden"
                        animate={isIntroVisible ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3, // Setiap huruf akan muncul bertahap setiap 0.5 detik
                                },
                            },
                        }}
                    >
                        {intro.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={typewriterVariant} // Gunakan variant yang sama untuk setiap huruf
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </CSSTransition>

            {!isIntroVisible && (
                <div className="text-center text-white">
                    <HeroHeader
                        eventTitle="The Wedding of"
                        coupleName="Yoga Irma"
                        eventDate="Monday, 10 Desember 2024"
                    />

                    {/* Transisi untuk konten undangan */}
                    <CSSTransition
                        nodeRef={invitationRef} // Menggunakan nodeRef
                        in={!isInvitationOpen}
                        timeout={800}
                        classNames="fade-slide-up"
                        unmountOnExit
                    >
                        <div ref={invitationRef}>
                            <HeroGuest guestName={guestName} />
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        nodeRef={invitationRef} // Menggunakan nodeRef
                        in={isInvitationOpen}
                        timeout={800}
                        classNames="slide-up"
                        unmountOnExit
                    >
                        <div ref={invitationRef} className="pt-[300px]">
                            <Countdown targetDate={targetDate} />
                        </div>
                    </CSSTransition>

                    {!isInvitationOpen && (
                        <button
                            className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow font-belgiano z-50"
                            onClick={handleOpenInvitation}
                        >
                            Open Invitation
                        </button>
                    )}
                </div>
            )}

            {/* Gradasi putih di bagian bawah */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] lg:h-[70px] bg-gradient-to-t from-[#f8f7f7] to-transparent"></div>
        </div>
    );
};

export default Hero;
