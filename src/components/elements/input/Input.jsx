// import React from 'react'

const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, inputName } = props;

  return (
    <div>
      <input
        type={type}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-"
        placeholder={placeholder}
        name={inputName}
        id={inputName}
      />
    </div>
  );
};

export default Input;
