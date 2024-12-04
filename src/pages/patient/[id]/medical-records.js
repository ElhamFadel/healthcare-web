import { useRouter } from 'next/router';
import Image from 'next/image';
export default function MedicalRecords() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Medical Records for Patient {id}</h1>
      <p className="text-lg mb-6">Review all of your medical records, including lab reports, images, and more.</p>

      {/* Example Medical Record */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Lab Report - Blood Test</h2>
        <p className="text-gray-600">Date: 5th December 2024</p>
        <a href="/path/to/lab-report.pdf" target="_blank" className="text-blue-500 hover:underline">Download Report</a>
      </div>

      {/* Example Medical Image */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">X-Ray Image</h2>
        <Image src="/path/to/xray-image.jpg" alt="X-Ray" width="300" height="300" className="w-full rounded-md" />
        <p className="text-gray-600 mt-2">Uploaded on: 4th December 2024</p>
      </div>
    </div>
  );
}
