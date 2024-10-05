import React from 'react';

interface EventInfoProps {
  title: string;
  date: string;
  time: string;
  location: string;
  locationUrl: string;
  targetDate: string; // Tambahkan targetDate sebagai properti baru
  isReception?: boolean;
}

const formatGoogleCalendarDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().replace(/-|:|\.\d{3}/g, '');
};

const EventInfo: React.FC<EventInfoProps> = ({ title, date, time, location, locationUrl, targetDate, isReception }) => {
  // Format date for Google Calendar
  const formattedDate = formatGoogleCalendarDate(targetDate);
  const endDate = new Date(new Date(targetDate).getTime() + 2 * 60 * 60 * 1000); // 2 hours later
  const formattedEndDate = formatGoogleCalendarDate(endDate.toISOString());

  // Create Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formattedDate}/${formattedEndDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent('Join us for the event')}`;

  return (
    <div className="">
      {!isReception && <hr className="text-white" />} {/* Display hr only before Pawiwahan */}
      <h1 className={`text-white text-[30px] mt-6 mb-2 font-edensor ${isReception ? 'text-end' : ''}`}>{title}</h1>
      <p className={`text-white ${isReception ? 'text-end' : ''}`}>{date}</p>
      <p className={`text-white ${isReception ? 'text-end' : ''}`}>{time}</p>
      <p className={`text-white text-[12px] pt-2 ${isReception ? 'text-end' : ''}`}>{location}</p>
      
      <div className={`flex ${isReception ? 'justify-end' : ''} gap-3`}>
        {isReception && (
          <>
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]">
                Save The Date
              </button>
            </a>
            <a href={locationUrl} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]">
                Location
              </button>
            </a>
          </>
        )}
        {!isReception && (
          <a href={locationUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]">
              Location
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
