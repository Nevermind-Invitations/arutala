import { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import GroomPage from "./GroomPage";
import BridePage from "./BridePage";
import QuotePage from "./QuotePage";
import JourneyPage from "./JourneyPage";
import EventPage from "./EventPage";
import DressCodePage from "./DressCodePage";
import WeddingGiftPage from "./WeddingGiftPage";
import RsvpPage from "./RsvpPage";
import LastPage from "./LastPage";
import GalleryPage from "./GalerryPage";

export default function Home() {
    const [isInvitationOpen, setIsInvitationOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleInvitationOpen = () => {
        setIsInvitationOpen(true);
        playAudio();
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Pause audio when the document is not visible
                if (audioRef.current) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                }
            } else {
                // Play audio if the invitation is open and user returns
                if (isInvitationOpen && audioRef.current) {
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [isInvitationOpen]);

    return (
        <div className="relative h-screen">
            {/* Background Section */}
            <div className="bg-cover-1 bg-fixed bg-center bg-no-repeat h-screen"></div>

            {/* Scrollable Content */}
            <div className={`absolute inset-0 z-10 ${isInvitationOpen ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                <Hero onInvitationOpen={handleInvitationOpen} />
                {isInvitationOpen && (
                    <>
                        <GroomPage />
                        <BridePage />
                        <QuotePage />
                        <JourneyPage />
                        <EventPage />
                        <DressCodePage />
                        <WeddingGiftPage />
                        <RsvpPage />
                        <GalleryPage />
                        <LastPage />
                    </>
                )}
            </div>

            {/* Audio Component */}
            <div id="audio-container" className="absolute bottom-24 right-4 z-20">
                <audio ref={audioRef} id="song" autoPlay loop>
                    <source src="audio/arutala.mp3" type="audio/mp3" />
                </audio>
                <div 
                    className={`audio-icon-wrapper ${isPlaying ? 'rotate' : ''}`} 
                    onClick={toggleAudio}
                >
                    <img 
                        src="/vinylicon.ico" 
                        alt="Vinyl Record" 
                        style={{ width: '30px', height: '30px', fill: 'black' }} 
                    />
                </div>
            </div>
        </div>
    );
}
