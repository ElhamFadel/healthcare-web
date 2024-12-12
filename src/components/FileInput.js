import React from 'react';

const FileInput = ({ label, name, onChange, required }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-semibold mb-1">{label}</label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-md"
      required={required}
    />
  </div>
);

export default FileInput;
