import React from 'react';

interface GuestGreetingProps {
    guestName: string;
}

const HeroGuest: React.FC<GuestGreetingProps> = ({ guestName }) => {
    return (
        <div>
            <p className="text-xl mb-2 pt-[180px] italic font-belgiano">Dear,</p>
            <p className="text-2xl mb-4 font-edensor">{guestName}</p>
            <p className="text-[12px] mb-1 italic font-edensor">We apologize if there any misspelling title or name</p>
            <p className="text-[12px] mb-4 italic font-edensor">Mohon maaf jika ada kesalahan penyebutan gelar atau nama.</p>
        </div>
    );
};

export default HeroGuest;
