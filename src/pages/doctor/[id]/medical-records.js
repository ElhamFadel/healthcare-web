import { useRouter } from 'next/router';
import Image from 'next/image';
export default function MedicalRecords() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Medical Records of Dr. John Doe</h1>
      <p className="text-lg mb-6">View the medical records and images of your patients.</p>

      {/* Example medical record */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">CT Scan for John Smith</h2>
        <Image src="https://via.placeholder.com/500" width='300' height='300' alt="CT Scan" className="mb-4" />
        <p className="text-gray-600">Diagnosis: Mild fracture</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add Notes</button>
      </div>
    </div>
  );
}
