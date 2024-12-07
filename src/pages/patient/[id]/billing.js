import { useRouter } from 'next/router';

export default function Billing() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Billing for Patient {id}</h1>
      <p className="text-lg mb-6">Check your billing information and pay for your medical services.</p>

      {/* Example Invoice */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Invoice #12345</h2>
        <p className="text-gray-600 mb-4">Date: 12th December 2024</p>
        <p className="text-gray-600 mb-4">Amount Due: $150</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
          Pay Now
        </button>
      </div>

      {/* Another Invoice */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Invoice #12346</h2>
        <p className="text-gray-600 mb-4">Date: 10th December 2024</p>
        <p className="text-gray-600 mb-4">Amount Due: $200</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
          Pay Now
        </button>
      </div>
    </div>
  );
}
