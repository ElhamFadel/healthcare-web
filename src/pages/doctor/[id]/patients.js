import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Patients() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Patients of Dr. John Doe</h1>
      <p className="text-lg mb-6">Here is the list of patients you&apos;re currently following.</p>

      {/* Example patient */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">John Smith</h2>
        <p className="text-gray-600">Age: 35</p>
        <p className="text-gray-600">Condition: Diabetes</p>
        <Link href={`/doctor/${id}/medical-records`}>
          <span className="text-blue-500 hover:underline">View Medical Records</span>
        </Link>
      </div>
    </div>
  );
}
