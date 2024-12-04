import { useRouter } from 'next/router';

export default function Notifications() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Notifications for Patient {id}</h1>
      <p className="text-lg mb-6">Check your notifications regarding appointments and messages from doctors.</p>

      {/* Example Notification */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Appointment Reminder</h2>
        <p className="text-gray-600 mb-4">You have an upcoming appointment with Dr. John Doe on 12th December 2024 at 2:00 PM.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
          View Appointment
        </button>
      </div>

      {/* Another Example Notification */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Message from Dr. Jane Smith</h2>
        <p className="text-gray-600 mb-4">Dr. Smith has left a message regarding your last consultation.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
          View Message
        </button>
      </div>
    </div>
  );
}
