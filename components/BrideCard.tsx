import React from 'react';

interface ProfileCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  name: string;
  description: string;
  additionalInfo: string;
  username: string;
}

const BrideCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  altText,
  title,
  name,
  description,
  additionalInfo,
  username,
}) => {
  return (
    <div className="mt-3 lg:flex lg:gap-20 lg:flex-row-reverse">
      <div>
        <h1 className="text-gray-900">
          <img src={imageUrl} alt={altText} className="lg:w-[600px]" />
        </h1>
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-white text-end text-[20px] mt-2 font-oldscientific">{title}</h2>
        <h1 className="text-white text-end text-[28px] font-edensor">{name}</h1>
        <p className="text-white text-end text-[16px] italic font-edensor">{description}</p>
        <p className="text-white text-end text-[14px] mt-2 font-sans">{additionalInfo}</p>
        <a
          href={`https://www.instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex justify-end text-end text-[9px] mt-2 font-sans no-underline"
        >
          @{username}
        </a>
      </div>
    </div>
  );
};

export default BrideCard;
