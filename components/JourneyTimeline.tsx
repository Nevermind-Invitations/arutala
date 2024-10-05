import React from 'react';

interface JourneyEntry {
  year: string;
  description: string;
}

interface JourneyTimelineProps {
  title: string;
  title1: string;
  title2: string;
  entries: JourneyEntry[];
}

const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ title, title1, title2, entries }) => {
  return (
    <div className="mt-10">
      <h1 className="text-white text-[28px] leading-[28px] font-edensor">{title}</h1>
      <h1 className="text-white text-[28px] leading-[28px] font-edensor">{title1}</h1>
      <h1 className="text-white text-[28px] leading-[28px] font-edensor">{title2}</h1>
      <hr className="my-3" />
      {entries.map((entry, index) => (
        <div key={index}>
          <h1 className="text-white text-[18px] my-2">{entry.year}</h1>
          <p className="text-white text-[14px] text-justify">{entry.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
