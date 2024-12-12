import React from 'react';

const specialties = [
  "Cardiology", 
  "Neurology", 
  "Orthopedics", 
  "Pediatrics", 
  "Dermatology",
  "General Medicine",
  "Gynecology"
];

const SpecialtyState = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="specialty" className="block text-lg font-medium text-gray-700">
        Specialty
      </label>
      <select
        id="specialty"
        name="specialty"
        value={value}
        onChange={onChange}
        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        required
      >
        <option value="">Select a specialty</option>
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpecialtyState;
