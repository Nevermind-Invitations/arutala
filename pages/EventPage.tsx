import React from 'react';
import EventInfo from '@/components/EventInfo';
import Countdown from '@/components/Countdown';

const EventPage: React.FC = () => {
    const targetDate = '2024-10-10T20:25:00';
    const locationUrl = "https://maps.app.goo.gl/i6qkwyMYFjLuK5y77";

    return (
        <section className="flex relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#363636] opacity-50"></div>

            {/* Content */}
            <div className="m-10 my-16 relative w-screen lg:max-w-[400px] lg:mx-auto bg-white rounded-t-full bg-opacity-40" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div>
                                <EventInfo
                                    title="Pawiwahan"
                                    date="Monday, 10 September 2024"
                                    time="at 09.00 WITA-Selesai"
                                    location="Jl. Matahari Terbit No.3, Sanur, Denpasar Selatan, Kota Denpasar, Bali"
                                    locationUrl={locationUrl}
                                    targetDate={targetDate}
                                />

                                <EventInfo
                                    title="Resepsi"
                                    date="Monday, 10 September 2024"
                                    time="at 09.00 WITA-Selesai"
                                    location="Jl. Matahari Terbit No.3, Sanur, Denpasar Selatan, Kota Denpasar, Bali"
                                    locationUrl={locationUrl}
                                    targetDate={targetDate}
                                    isReception={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default EventPage;
