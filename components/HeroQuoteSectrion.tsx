import React from 'react';

interface QuoteSectionProps {
    quote: string;
    source: string;
    additionalMessage?: string;
}

const HeroQuoteSection: React.FC<QuoteSectionProps> = ({ quote, source, additionalMessage }) => {
    return (
        <div className='lg:max-w-[500px] lg:mx-auto'>
            <p className="text-[14px] pt-[200px] mx-4 mb-4 italic font-edensor">
                {quote} <br />
                ({source})
            </p>
            {additionalMessage && (
                <p className="text-[14px] mx-4 mb-4 font-edensor">
                    {additionalMessage}
                </p>
            )}
        </div>
    );
};

export default HeroQuoteSection;
