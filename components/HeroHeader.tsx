import React from 'react';

interface InvitationHeaderProps {
    eventTitle: string;
    coupleName: string;
    eventDate: string;
}

const HeroHeader: React.FC<InvitationHeaderProps> = ({ eventTitle, coupleName, eventDate }) => {
    return (
        <div className="text-center text-white">
            <h1 className="text-sm pt-[50px] font-sans">You're Invited to</h1>
            <h1 className="text-2xl mb-2 font-belgiano">{eventTitle}</h1>
            <h2 className="text-6xl mb-3 font-edensor font-[2px]">
                {coupleName.split(" ")[0]} <span className='font-abigail'>&</span> {coupleName.split(" ")[1]}
            </h2>
            <p className="text-md mb-4 font-belgiano">{eventDate}</p>
        </div>
    );
};

export default HeroHeader;
