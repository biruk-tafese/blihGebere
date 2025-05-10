import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Ensure react-modal is installed
import { CheckCircleIcon } from 'lucide-react'; // Import an icon from lucide-react

const useTypingEffect = (text, speed) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset displayedText when text changes
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

const Prediction = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    rainfall: '',
    pesticide: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState('');
  const [saved, setSaved] = useState(false);

  const sampleCrops = ['Wheat', 'Rice', 'Corn', 'Barley', 'Soybean']; // Sample crops for random prediction

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCrop = sampleCrops[Math.floor(Math.random() * sampleCrops.length)]; // Randomly select a crop
    const prediction = `
    Based on the Input data:
    Temperature: ${formData.temperature}°C
    Rainfall: ${formData.rainfall}mm
    Pesticide: ${formData.pesticide}kg
    The predicted crop is: ${randomCrop}
    `;
    setPredictionResult(prediction); // Set the prediction result in state
    setIsModalOpen(true);
  };

   const closeModal = () => {
    setIsModalOpen(false);
    setSaved(false);
    setPredictionResult(''); // Clear the prediction result
    resetForm(); // Reset form fields
  };
  
  const saveResponse = () => {
    setSaved(true);
    alert('Response saved successfully!');
    setPredictionResult(''); // Clear the prediction result
    setIsModalOpen(false);
    resetForm(); // Reset form fields
  };

  const typingText = useTypingEffect(predictionResult, 50);

  const resetForm = () => {
    setFormData({
      temperature: '',
      rainfall: '',
      pesticide: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/img/crop_1.jpg')]">
      <div className="max-w-2xl items-center mx-auto p-8 bg-white rounded-lg shadow-lg mt-[6%]">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-6">Crop Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Temperature (°C)</label>
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Rainfall (mm)</label>
              <input
                type="number"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Pesticide</label>
              <input
                type="number"
                name="pesticide"
                value={formData.pesticide}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Predict
          </button>
        </form>

        {/* Modal for Prediction Result */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-xl w-full h-auto mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <CheckCircleIcon className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">Prediction Result</h2>
            <p className="text-center text-gray-700 mb-6">{typingText}</p>
            <div className="flex space-x-4">
              <button
                onClick={saveResponse}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none"
              >
                Save Response
              </button>
              <button
                onClick={closeModal}
                className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Prediction;