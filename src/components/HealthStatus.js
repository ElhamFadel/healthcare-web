import React from "react";

const HealthStatus = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <label className="block text-lg font-semibold">Health Status</label>
      <select
        name="healthStatus"
        value={formData?.healthStatus}
        onChange={handleInputChange}
        className="w-full p-3 border border-gray-300 rounded-lg"
        required
      >
        <option value="">Select Health Status</option>
        <option value="Healthy">Healthy</option>
        <option value="Sick">Sick</option>
        <option value="Chronic">Chronic</option>
        <option value="Injured">Injured</option>
      </select>
    </div>
  );
};

export default HealthStatus;
