import React from "react";
import FileInput from "@/components/FileInput";

const StepTwo = ({ handleFileChange }) => {
  return (
    <div className="space-y-6">
      <FileInput
        label="Upload ID Card"
        name="idCard"
        onChange={handleFileChange}
        required
      />
      <FileInput
        label="Upload Medical Record"
        name="medicalRecord"
        onChange={handleFileChange}
        required
      />
    </div>
  );
};

export default StepTwo;
