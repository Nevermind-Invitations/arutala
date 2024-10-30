import Quote from '@/components/Quote';
import React from 'react';

const QuotePage = () => {
    return (
        <section className="flex justify-center relative">
            {/* Overlay yang menutupi seluruh halaman dengan warna putih */}
            <div className="absolute inset-0 bg-[#f8f7f7] h-full"></div>
            
            {/* Konten */}
            <div className="m-10 relative z-10 lg:max-w-[800px] lg:mx-auto">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <div>
                            <Quote
                                source="Rg Veda X.85.42"
                                quote="Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe."
                                additionalInfo="Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu."
                                imageUrl="/images/angsa.jpg"
                                altText="quotephoto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuotePage;
