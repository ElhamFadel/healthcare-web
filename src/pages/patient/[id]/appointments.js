import { useRouter } from 'next/router';

export default function Appointments() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Appointments for Patient {id}</h1>
      <p className="text-lg mb-6">Check your upcoming appointments with doctors.</p>

      {/* Example Appointment */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Appointment with Dr. John Doe</h2>
        <p className="text-gray-600">Date: 12th December 2024, 2:00 PM</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Reschedule</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 ml-2">Cancel</button>
      </div>
    </div>
  );
}
