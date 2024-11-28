import React from "react";

const Input = ({
  label,
  labelFor,
  labelClassName,
  inputType,
  placeholder,
  className,
  required,
  value,
  onchange,
}) => {
  return (
    <>
      <label
        htmlFor={labelFor}
        className={`text-[11px] lg:text-[13px] text-black font-semibold leading-[210%] my-[5px] ${labelClassName}`}
      >
        {label} <span className="text-[#C94D3F]">{required}</span>
      </label>
      <input
        onChange={onchange}
        value={value}
        id={labelFor}
        type={inputType}
        placeholder={placeholder}
        className={`w-full bg-white border border-[#A2A6B0] rounded-[4px] lg:py-[15px] lg:px-[17px] pt-[10px] pb-2 px-[15px] placeholder:text-[#A2A6B0] text-black lg:text-sm text-xs lg:leading-[142.857%] leading-[167.677%] outline-none ${className}`}
      />
    </>
  );
};

export default Input;
