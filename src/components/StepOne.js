import React from 'react';
import InputField from "@/components/InputField"; 

const StepOne = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <InputField
        label="Full Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your full name"
        required
      />
      <InputField
        label="Age"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="Enter your age"
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
        required
      />
       <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        required
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Enter your phone number"
        required
      />
    </div>
  );
};

export default StepOne;
