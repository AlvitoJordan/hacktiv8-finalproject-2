import React from "react";

const Input = (props) => {
  const { typeInput, type, placeholder, onChange, value, name } = props;
  switch (typeInput) {
    case "Search":
      return <input type={type} className="border-2 border-lightgray bg-white h-[45px] w-full px-5 pr-5 rounded-md text-sm focus:outline-none" placeholder={placeholder} onChange={onChange} value={value} name={name} />;

    default:
      return (
        <input
          type={type}
          className="border-2 border-secondary bg-white h-[60px] w-[60%]  px-5 pr-5 rounded-md text-sm focus:outline-none placeholder:text-secondary"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
  }
};

export default Input;
