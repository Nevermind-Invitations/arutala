import ImageGrid from '@/components/ImageGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import React from 'react';


const JourneyPage: React.FC = () => {
  const gridImages = [
    '/images/galeri02.jpg',
    '/images/galeri03.jpg',
    '/images/galeri04.jpg',
    '/images/galeri05.jpg',
    '/images/galeri01.jpg'
  ];
  const journeyEntries = [
    {
      year: 'September, 2020',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.',
    },
    {
      year: 'September, 2021',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.',
    },
    {
      year: 'September, 2022',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.',
    },
  ];

  return (
    <section className="flex flex-col relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f8f7f7] h-full"></div>
      {/* Content */}
      <div className='z-20 lg:hidden'>
        <ImageGrid images={gridImages} />
      </div>
      <div className="m-10 mt-0 relative z-10 w-max-screen lg:max-w-[1000px] lg:mx-auto">
        <div className="row">
          <div className="col-md-8">
            <div>
              <JourneyTimeline
                title="The Journey in Love"
                title2="Yoga & Irma"
                entries={journeyEntries}
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default JourneyPage;
