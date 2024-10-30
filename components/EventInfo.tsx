import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EventInfoProps {
  title: string;
  date: string;
  time: string;
  location: string;
  locationUrl: string;
  targetDate: string;
  isReception?: boolean;
}

const formatGoogleCalendarDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().replace(/-|:|\.\d{3}/g, '');
};

const EventInfo: React.FC<EventInfoProps> = ({ title, date, time, location, locationUrl, targetDate, isReception }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const formattedDate = formatGoogleCalendarDate(targetDate);
  const endDate = new Date(new Date(targetDate).getTime() + 2 * 60 * 60 * 1000); // 2 hours later
  const formattedEndDate = formatGoogleCalendarDate(endDate.toISOString());

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${formattedDate}/${formattedEndDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(
    'Join us for the event'
  )}`;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className=""
    >
      <h1
        className={`text-white text-[30px] mb-2 font-edensor ${
          isReception ? 'text-center mt-12' : 'text-center mt-24'
        }`}
      >
        {title}
      </h1>
      <p className={`text-white ${isReception ? 'text-center' : 'text-center'}`}>{date}</p>
      <p className={`text-white ${isReception ? 'text-center' : 'text-center'}`}>{time}</p>
      <p className={`text-white text-[12px] pt-2 mx-2 ${isReception ? 'text-center' : 'text-center'}`}>
        {location}
      </p>

      <div className={`flex flex-col-reverse items-center ${isReception ? 'justify-center' : 'justify-center'} gap-1`}>
        {isReception && (
          <>
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 mb-12 px-3.5 py-1.5 bg-gray-600 text-white opacity-80 font-semibold rounded-xl shadow text-[10px]">
                SAVE THE DATE
              </button>
            </a>
            <a href={locationUrl} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 px-6 py-1.5 bg-gray-600 text-white opacity-80 font-semibold rounded-xl shadow text-[10px]">
                LOCATION
              </button>
            </a>
          </>
        )}
        {!isReception && (
          <a href={locationUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 px-6 py-1.5 bg-gray-600 text-white opacity-80 font-semibold rounded-xl shadow text-[10px]">
              LOCATION
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EventInfo;
