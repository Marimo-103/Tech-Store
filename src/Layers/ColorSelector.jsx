import React from 'react';

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="color-selector flex md:space-x-4 space-x-3">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-option flex justify-center items-center cursor-pointer transition-transform duration-300 transform ${
            selectedColor === color ? 'scale-110' : 'scale-100'
          }`}
          onClick={() => onSelectColor(color)}
        >
          <div
            className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 transition-colors ${
              selectedColor === color ? 'border-[#0156FF]' : 'border-white'
            }`}
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
