import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import HeroHeader from '@/components/HeroHeader';
import HeroGuest from '@/components/HeroGuest';
import HeroQuoteSection from '@/components/HeroQuoteSectrion';


interface HeroProps {
    onInvitationOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvitationOpen }) => {
    const [isInvitationOpen, setIsInvitationOpen] = useState(false);
    const router = useRouter();
    const guestName = router.query.to ? decodeURIComponent(router.query.to as string).replace(/\+/g, ' ') : 'Nama Tamu';

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

    return (
        <div className="min-h-screen justify-center">
            <div className="text-center text-white">
                <HeroHeader
                    eventTitle="The Wedding of"
                    coupleName="Yoga Irma"
                    eventDate="Monday, 10 September 2024"
                />

                {/* Transisi untuk konten undangan */}
                <CSSTransition
                    in={!isInvitationOpen}
                    timeout={800}
                    classNames="fade-slide-up"
                    unmountOnExit
                >
                    <div>
                        <HeroGuest guestName={guestName} />
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={isInvitationOpen}
                    timeout={800}
                    classNames="slide-up"
                    unmountOnExit
                >
                    <HeroQuoteSection
                        quote="Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe."
                        source="Rg Veda X.85.42"
                        additionalMessage="Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu."
                    />
                </CSSTransition>

                {!isInvitationOpen && (
                    <button
                        className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow font-belgiano"
                        onClick={handleOpenInvitation}
                    >
                        Open Invitation
                    </button>
                )}
            </div>
        </div>
    );
};

export default Hero;
