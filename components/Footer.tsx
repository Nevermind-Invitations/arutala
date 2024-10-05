import React from 'react';

interface FooterProps {
  phoneIcon: React.ReactNode;
  instagramIcon: React.ReactNode;
  websiteIcon: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ phoneIcon, instagramIcon, websiteIcon }) => {
  return (
    <footer className="absolute bottom-0 left-0 w-full text-gray-200 text-center py-4">
      <div>
        <div className="flex justify-center mb-2">
          <img
            src="/nvrmndicon.ico" 
            alt="Nevermind Icon"
            className="w-6 h-6"
          />
        </div>

        <p className="mb-1 text-[12px]">CREATED BY NEVERMIND</p>

        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center gap-1">
            {phoneIcon}
            <a
              href="https://wa.me/6285770018188"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] no-underline"
            >
              +62 857-7001-8188
            </a>
          </div>
          <div className="flex items-center gap-1">
            {instagramIcon}
            <a
              href="https://instagram.com/nevermind.invitations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] no-underline"
            >
              nevermind.invitations
            </a>
          </div>
          <div className="flex items-center gap-1">
            {websiteIcon}
            <a
              href="https://nevermind.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] no-underline"
            >
              nevermind.com
            </a>
          </div>
        </div>

        <p className="text-[12px]">© All rights reserved by nevermind</p>
      </div>
    </footer>
  );
};

export default Footer;
