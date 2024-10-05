import React from 'react';

interface DressCodeProps {
  title: string;
  description: string;
  colors: string[]; // Array of color hex codes
}

const DressCode: React.FC<DressCodeProps> = ({ title, description, colors }) => {
  // Create a grid for the colors (4 per row)
  const colorRows = [];
  for (let i = 0; i < colors.length; i += 4) {
    colorRows.push(colors.slice(i, i + 4));
  }

  return (
    <div className="">
      <h1 className="text-white text-[30px] mt-6 mb-2 font-edensor">{title}</h1>
      <p className="text-white">{description}</p>
      <table className="w-full mt-3 border-separate border-spacing-1 -ml-[1px]">
        <tbody>
          {colorRows.map((row, index) => (
            <tr key={index} className="w-full h-20">
              {row.map((color, idx) => (
                <th
                  key={idx}
                  style={{ backgroundColor: color }}
                  className={`w-12 h-12 ${idx === 0 ? '-ml-1' : ''} ${
                    idx === row.length - 1 ? '-mr-1' : ''
                  }`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DressCode;
