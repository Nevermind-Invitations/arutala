import BrideCard from '@/components/BrideCard';
import React from 'react';

const BridePage = () => {
    return (
        <section className="flex justify-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 mt-[-1px] bg-[#f8f7f7]"></div>
            {/* Content */}
            <div className="m-10 mt-0 relative z-10 lg:max-w-[1000px] lg:mx-auto lg:mt-[-30px]">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <div>
                            <BrideCard
                                imageUrl="/images/bcover.png"
                                altText="bridephoto"
                                title="The Bride"
                                name="Irma Pradnyani"
                                description="Putri kedua dari pasangan"
                                parents='Bapak Example & Ibu Example'
                                additionalInfo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur repellat blanditiis modi quaerat quam minus, incidunt error itaque omnis?"
                                username="nevermind.invitations"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BridePage;
