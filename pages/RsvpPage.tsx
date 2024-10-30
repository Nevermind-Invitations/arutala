import BlessingForm from '@/components/BlessingForm';
import BlessingList from '@/components/BlessingList';
import React, { useState, useEffect } from 'react';

interface Blessing {
    nama: string;
    ucapan: string;
    createdAt: string; 
}

const RsvpPage: React.FC = () => {
    const [blessings, setBlessings] = useState<Blessing[]>([]);

    // Fetch existing blessings on load
    useEffect(() => {
        const fetchBlessings = async () => {
            const res = await fetch('/api/blessings');
            const data = await res.json();
            setBlessings(data.blessings);
        };

        fetchBlessings();
    }, []);

    const handleBlessingSubmit = async (blessingData: { nama: string; kehadiran: string; jumlah: number; ucapan: string; createdAt: string }) => {
        const response = await fetch('/api/blessings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blessingData),
        });

        const data = await response.json();

        // After submitting, fetch blessings again
        if (response.ok) {
            setBlessings((prevBlessings) => [...prevBlessings, data.blessing]);
        }
    };

    return (
        <section className="flex relative">
            <div className="absolute inset-0 mt-[-5px] bg-[#f8f7f7] h-full"></div>
            <div className="m-10 mt-0 relative w-screen lg:max-w-[800px] lg:mx-auto">
                <div className="row">
                    <div className="col-md-8 ">
                        <BlessingForm onSubmit={handleBlessingSubmit} />
                        <BlessingList blessings={blessings} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RsvpPage;
