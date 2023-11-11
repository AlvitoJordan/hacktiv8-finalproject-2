import React from "react";

const Input = (props) => {
  const {
    typeInput,
    type,
    placeholder,
    onChange,
    value,
    name,
    className,
    icon,
  } = props;
  switch (typeInput) {
    case "Search":
      return (
        <input
          type={type}
          className="border-2 border-lightgray bg-white h-[45px] w-full px-5 pr-5 rounded-md text-sm focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );

    case "InputWithIcon":
      return (
        <div className="border-2 border-secondary h-[60px] w-full lg:w-[60%]  px-5 pr-5 rounded-md flex justify-center items-center space-x-5">
          {icon}
          <input
            type={type}
            className="w-full h-full text-sm text-darkgray focus:outline-none placeholder:text-secondary"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    default:
      return (
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
  }
};

export default Input;
