// VinylRecordIcon.tsx (or .jsx, depending on your setup)
import React from 'react';

interface Props {
    fill?: string; // Make sure to add this line
    className?: string; // Optional: to allow custom class names
}

const VinylRecordIcon: React.FC<Props> = ({ fill = "black", className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%" // Adjust size as needed
            height="100%" // Adjust size as needed
            fill={fill} // Apply the fill prop here
        >
            {/* Your SVG paths here */}
            <circle cx="12" cy="12" r="10" />
            {/* Add other paths or elements for the vinyl record */}
        </svg>
    );
};

export default VinylRecordIcon;
