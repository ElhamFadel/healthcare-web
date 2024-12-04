import { useRouter } from 'next/router';

export default function Appointments() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Appointments for Dr. John Doe</h1>
      <p className="text-lg mb-6">Manage your appointments here.</p>

      {/* List of appointments */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        {/* Example appointment */}
        <div className="mb-4">
          <p><strong>Patient:</strong> John Smith</p>
          <p><strong>Time:</strong> 2:00 PM, 10th December 2024</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Accept</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 ml-2">Reject</button>
        </div>
        {/* More appointments here */}
      </div>
    </div>
  );
}
