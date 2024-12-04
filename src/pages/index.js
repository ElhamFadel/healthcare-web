import localFont from "next/font/local";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Healthcare App
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop platform for managing healthcare needs. Easily book appointments, access medical documents, and stay in touch with your doctors.
          </p>
          <Link href="/login">
            <span className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300">
              Log In
            </span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Feature 1" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Easy Appointments</h3>
              <p>Book appointments with your doctor at the click of a button. Stay in control of your health.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Feature 2" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Medical Documents</h3>
              <p>Upload and access your medical records and lab reports securely.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Feature 3" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Doctor Consultations</h3>
              <p>Choose your doctor based on specialization and get personalized medical advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
          <div className="flex justify-center space-x-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg mb-4">"This app has made managing my healthcare so much easier. I can book appointments and access my documents anytime."</p>
              <p className="font-semibold text-gray-700">John Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg mb-4">"I love how easy it is to find a doctor based on my needs. The app is very user-friendly."</p>
              <p className="font-semibold text-gray-700">Jane Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg mb-4">"I feel secure knowing my medical records are stored safely in the cloud, and I can share them with my doctor instantly."</p>
              <p className="font-semibold text-gray-700">Mary Johnson</p>
            </div>
          </div>
        </div>

      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Healthcare App. All rights reserved. Developed by <strong>Elham Elshami</strong>.
          </p>
        </div>
      </footer>
    </div>
  );
}
