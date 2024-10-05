import { FC } from 'react';

interface Props extends React.HTMLAttributes<SVGElement> {
    color?: string;
}

const InstagramIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.25 6.75H17.2525"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default InstagramIcon;
