import { useRouter } from 'next/router';

export default function Notifications() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Notifications for Dr. John Doe</h1>
      <p className="text-lg mb-6">Here you can see the latest updates and notifications.</p>

      {/* Example notification */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-4">New Appointment Request</h2>
        <p className="text-gray-600">You have a new appointment request from John Smith for 2:00 PM, 10th December 2024.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">View Appointment</button>
      </div>
    </div>
  );
}
