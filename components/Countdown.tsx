import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Adding a state to handle hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading or empty state until client-side render is complete
  if (!isClient) {
    return null; // Or some loading indicator
  }

  return (
    <div className="flex flex-wrap justify-center space-x-0 space-y-0 sm:space-y-0 sm:space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center w-14 h-16 sm:w-16 sm:h-24 text-white rounded-full"
        >
          <span className="text-lg sm:text-md font-bold">{value}</span>
          <span className="text-xs sm:text-sm">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
