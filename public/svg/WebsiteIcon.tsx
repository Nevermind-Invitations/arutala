import { FC } from 'react';

interface Props extends React.HTMLAttributes<SVGElement> {
    color?: string;
}

const WebsiteIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.05 12H21.95"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 2.05C13.761 5.01079 14.75 8.42172 14.75 12C14.75 15.5783 13.761 18.9892 12 21.95C10.239 18.9892 9.25 15.5783 9.25 12C9.25 8.42172 10.239 5.01079 12 2.05Z"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default WebsiteIcon;
