import GroomCard from '@/components/GroomCard';
import React from 'react';

const GroomPage = () => {
    return (
        <section className="flex justify-center relative">
            {/* Overlay yang menutupi seluruh halaman dengan warna putih */}
            <div className="absolute inset-0 bg-[#f8f7f7] h-full"></div>
            
            {/* Konten */}
            <div className="m-10 relative z-10 lg:max-w-[1000px] lg:mx-auto">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <div>
                            <GroomCard
                                imageUrl="/images/gcover.png"
                                altText="groomphoto"
                                title="The Groom"
                                name="Yoga Waisnawa"
                                description="Putra pertama dari pasangan"
                                parents='Mr.Example & Mrs.Example'
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

export default GroomPage;
