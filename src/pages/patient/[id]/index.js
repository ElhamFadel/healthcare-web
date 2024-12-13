import { useRouter } from 'next/router';
import Link from 'next/link';
import {useAuth} from "@/context/AuthContext"
import UserAuth from '@/utils/UserAuth';

export default function PatientDashboard() {
  const router = useRouter();
  const { state, dispatch } = useAuth();
  const {user} = state;
  const { id } = router.query; 
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome, {user?.name}</h1>
      <p className="text-lg mb-6">Here is your dashboard where you can manage your health and appointments.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
          <p className="text-gray-600 mb-4">Check your upcoming appointments with doctors.</p>
          <Link href={`/patient/${id}/appointments`}>
            <span className="text-blue-500 hover:underline">View Appointments</span>
          </Link>
        </div>

        {/* Medical Records */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
          <p className="text-gray-600 mb-4">View your medical history, including lab reports and scans.</p>
          <Link href={`/patient/${id}/medical-records`}>
            <span className="text-blue-500 hover:underline">View Medical Records</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Doctors */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Doctors</h2>
          <p className="text-gray-600 mb-4">Browse and select doctors based on your health condition.</p>
          <Link href={`/patient/${id}/doctors`}>
            <span className="text-blue-500 hover:underline">View Doctors</span>
          </Link>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <p className="text-gray-600 mb-4">Check notifications for updates, appointments, and messages.</p>
          <Link href={`/patient/${id}/notifications`}>
            <span className="text-blue-500 hover:underline">View Notifications</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
