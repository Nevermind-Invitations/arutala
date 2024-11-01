import { FC } from 'react';

interface Props extends React.HTMLAttributes<SVGElement> {
    color?: string; // Menambahkan properti warna opsional
}

const PhoneIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className} // Menggunakan className dengan benar
        >
            <path
                d="M3.43898 6.96879C4.95901 13.7235 10.2765 19.041 17.0312 20.561C19.1865 21.046 21 19.2091 21 17V15.25C21 14.6977 20.5514 14.2547 20.0012 14.2063C18.9118 14.1104 17.8669 13.8593 16.8888 13.4751L15.1796 15.1843C12.3997 13.854 10.146 11.6003 8.81567 8.82037L10.5249 7.11118C10.1407 6.13313 9.88957 5.08823 9.79373 3.99877C9.74533 3.44861 9.30229 3 8.75 3H7C4.79086 3 2.95398 4.81355 3.43898 6.96879Z"
                stroke={color ?? '#B4B4B4'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PhoneIcon;
