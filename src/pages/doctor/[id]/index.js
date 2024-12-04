import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DoctorDashboard() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome Dr. John Doe (ID: {id})</h1>
      <p className="text-lg mb-6">Here is your dashboard where you can manage your patients, appointments, and medical records.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Patients */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Patients</h2>
          <p className="text-gray-600 mb-4">Manage your patients and view their records.</p>
          <Link href={`/doctor/${id}/patients`}>
            <span className="text-blue-500 hover:underline">View Patients</span>
          </Link>
        </div>

        {/* Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
          <p className="text-gray-600 mb-4">Check your upcoming appointments and manage them.</p>
          <Link href={`/doctor/${id}/appointments`}>
            <span className="text-blue-500 hover:underline">View Appointments</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Medical Records */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
          <p className="text-gray-600 mb-4">View and update medical records and images for your patients.</p>
          <Link href={`/doctor/${id}/medical-records`}>
            <span className="text-blue-500 hover:underline">View Medical Records</span>
          </Link>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <p className="text-gray-600 mb-4">Check notifications for new appointments, updates, and messages from patients.</p>
          <Link href={`/doctor/${id}/notifications`}>
            <span className="text-blue-500 hover:underline">View Notifications</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
