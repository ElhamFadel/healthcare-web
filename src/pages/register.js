import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from '@/context/AuthContext';
import StepOne from "@/components/StepOne";
import HealthStatus from "@/components/HealthStatus";
import SpecialtyState from "@/components/SpecialtyState";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import useAuthActions from "@/context/useAuthActions";
export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { state } = useAuth();
  const { register, loading, error } = useAuthActions();
const { typeUser } = state; 
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password:"",
    phone: "",
    healthStatus: "",
    idCard: null,
    medicalRecord: null,
    specialty:null
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    await register(formData.email,formData.password,
      {
      ...formData,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Register as a {typeUser.role}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && <StepOne formData={formData} handleInputChange={handleInputChange} />}
          {step === 2 && (
           typeUser?.role === 'patient' ? (
              <HealthStatus handleFileChange={HealthStatus} />
            ) : typeUser?.role === 'doctor' ? (
              <SpecialtyState   value={formData.specialty} onChange={handleInputChange} />
            ) : null
          )}
          {step === 3 && <StepTwo handleFileChange={handleFileChange} />}
          {step === 4 && <StepThree />}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="p-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={handleNextStep}
                className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Next
              </button>
            )}
            {step === 4 && (
              <button 
              type="submit" 
              className={`w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            )}
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
