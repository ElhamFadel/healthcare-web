// pages/index.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
export default function Home() {
  const { dispatch } = useAuth();
  const router = useRouter();
  const [headerText, setHeaderText] = useState("Are you a doctor or patient?");
  const [imageSrc, setImageSrc] = useState("/doctor.jpg");

  const handleUserSelection = (userType) => {
    dispatch({
      type: "SET_TYPE_USER",
      payload: { role: userType },
    });
    router.push("/login");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/home-bac.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full max-w-xs p-6 bg-white rounded-lg shadow-lg text-center space-y-6 h-[500px] flex flex-col justify-between">
        <div className="h-12 flex items-center justify-center">
          <h1 className="text-2xl font-semibold">{headerText}</h1>
        </div>

        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt="Selected"
            width={300}
            height = {300}
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
          />
        </div>

        <button
          className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
          onMouseEnter={() => {
            setHeaderText("Hello Doctor!");
            setImageSrc("/doctor.jpg");
          }}
          onMouseLeave={() => {
            setHeaderText("Are you a doctor or patient?");
            setImageSrc("/doctor.jpg");
          }}
          onClick={() => handleUserSelection("doctor")}
        >
          Doctor
        </button>

        <div className="text-gray-500 font-semibold">OR</div>

        <button
          className="w-full p-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
          onMouseEnter={() => {
            setHeaderText("Hello Patient!");
            setImageSrc("/patient.jfif");
          }}
          onMouseLeave={() => {
            setHeaderText("Are you a doctor or patient?");
            setImageSrc("/doctor.jpg");
          }}
          onClick={() => handleUserSelection("patient")}
        >
          Patient
        </button>
      </div>
    </div>
  );
}
