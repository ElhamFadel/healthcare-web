import Image from 'next/image';

const UserProfile = () => {
  const user = {
    name: 'Ahmed Ali',
    age: 30,
    healthStatus: 'Good',
    profileImage: 'https://via.placeholder.com/150',
  };

  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Youssef',
      date: 'December 5, 2024',
      time: '3:00 PM',
      image: '', 
    },
    {
      id: 2,
      doctorName: 'Dr. Mariam',
      date: 'December 7, 2024',
      time: '11:00 AM',
      image: '', 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="flex items-center space-x-6">
        <Image
          src='https://via.placeholder.com/150'
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 mt-2">Age: {user.age}</p>
          <p className="text-gray-600">Health Status: {user.healthStatus}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Appointments</h2>
        <ul className="mt-4 space-y-4">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Doctor"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-700">{appointment.doctorName}</h3>
                  <p className="text-gray-600">Date: {appointment.date}</p>
                  <p className="text-gray-600">Time: {appointment.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
