import { useState } from 'react';
import { db } from '../../firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const UploadPatientFiles = ({ patientId }) => {
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileName || !fileDescription) {
      alert("Please fill in all the fields.");
      return;
    }

    setUploading(true);

    try {
      const docRef = await addDoc(collection(db, "patient_files"), {
        patientId,   
        fileName, 
        fileDescription, 
        uploadedAt: new Date()  
      });

      alert(`File "${fileName}" uploaded successfully with ID: ${docRef.id}`);
      setFileName('');
      setFileDescription('');
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Patient Files</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fileName" className="block text-gray-700">File Name</label>
          <input
            type="text"
            id="fileName"
            className="w-full p-2 border border-gray-300 rounded"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fileDescription" className="block text-gray-700">File Description</label>
          <textarea
            id="fileDescription"
            className="w-full p-2 border border-gray-300 rounded"
            value={fileDescription}
            onChange={(e) => setFileDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  );
};

export default UploadPatientFiles;
