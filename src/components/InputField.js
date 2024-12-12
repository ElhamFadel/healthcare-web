import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-lg font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
