import { useRouter } from 'next/router';

export default function Doctors() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Doctors for Patient {id}</h1>
      <p className="text-lg mb-6">Browse and select a doctor based on your health condition.</p>

      {/* Example Doctor */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Dr. John Doe - Dermatologist</h2>
        <p className="text-gray-600 mb-4">Specialization: Dermatology</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
          Make an Appointment
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Dr. Jane Smith - Cardiologist</h2>
        <p className="text-gray-600 mb-4">Specialization: Cardiology</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
          Make an Appointment
        </button>
      </div>
    </div>
  );
}
