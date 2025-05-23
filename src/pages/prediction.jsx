import React, { useState, useEffect, useContext } from 'react';
import { CheckCircleIcon, FileDownIcon, Trash2Icon, MenuIcon, XIcon } from 'lucide-react';
import { AuthContext } from '../context/AuthContextInstance';

const Prediction = () => {
  const { user, predict, fetchOptions, downloadReport } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    avg_temp: '',
    average_rain_fall_mm_per_year: '',
    pesticides_tonnes: '',
    crop: '',
    area: '',
  });

  const [predictionHistory, setPredictionHistory] = useState([]);
  const [crops, setCrops] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch crops and areas from backend via context
  useEffect(() => {
    const loadOptions = async () => {
      try {
        if (user?.token) {
          const { crops, areas } = await fetchOptions(user.token);
          setCrops(crops);
          setAreas(areas);
        }
      } catch (err) {
        setCrops([]);
        setAreas([]);
      }
    };
    loadOptions();
  }, [user, fetchOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = async (item, type) => {
    try {
      await downloadReport(item, type, user.token);
    } catch (err) {
      alert('Download failed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await predict(formData);
      const result = {
        ...formData,
        predicted_yield: data.predicted_yield,
        timestamp: new Date().toLocaleString(),
      };
      setPredictionHistory((prev) => [result, ...prev]);
      setFormData({
        avg_temp: '',
        average_rain_fall_mm_per_year: '',
        pesticides_tonnes: '',
        crop: '',
        area: '',
      });
    } catch (err) {
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (idx) => {
    setPredictionHistory((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white px-4 py-3">
        <span className="text-lg font-bold text-green-400">Prediction</span>
        <button onClick={() => setSidebarOpen(true)}>
          <MenuIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Sidebar (History) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-4/5 max-w-xs bg-gray-900 text-white p-6 flex flex-col transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:w-1/3 md:max-w-xs md:block
        `}
        style={{ maxHeight: '100vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button on mobile */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <span className="text-2xl font-bold text-green-400">Prediction History</span>
          <button onClick={() => setSidebarOpen(false)}>
            <XIcon className="w-7 h-7" />
          </button>
        </div>
        {/* Title on desktop */}
        <h2 className="hidden md:block text-2xl font-bold mb-4 text-green-400">Prediction History</h2>
        <div className="flex-1 overflow-y-auto space-y-4" style={{ maxHeight: '80vh' }}>
          {predictionHistory.length === 0 && (
            <div className="text-gray-400">No predictions yet.</div>
          )}
          {predictionHistory.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow flex flex-col gap-1 relative group">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
                onClick={() => handleDelete(idx)}
                title="Delete"
              >
                <Trash2Icon className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-xs text-gray-400">{item.timestamp}</span>
              </div>
              <div className="text-sm mt-2 whitespace-pre-line">
                <span className="font-semibold text-green-300">Yield:</span> {item.predicted_yield} tons/ha
                <br />
                <span className="font-semibold">Crop:</span> {item.crop}
                <br />
                <span className="font-semibold">Area:</span> {item.area}
                <br />
                <span className="font-semibold">Temp:</span> {item.avg_temp}°C
                <br />
                <span className="font-semibold">Rainfall:</span> {item.average_rain_fall_mm_per_year}mm
                <br />
                <span className="font-semibold">Pesticides:</span> {item.pesticides_tonnes} t
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded flex items-center gap-1 text-xs"
                  onClick={() => handleDownload(item, 'pdf')}
                  title="Download PDF"
                >
                  <FileDownIcon className="w-4 h-4" /> PDF
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded flex items-center gap-1 text-xs"
                  onClick={() => handleDownload(item, 'csv')}
                  title="Download CSV"
                >
                  <FileDownIcon className="w-4 h-4" /> CSV
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded flex items-center gap-1 text-xs"
                  onClick={() => handleDownload(item, 'excel')}
                  title="Download Excel"
                >
                  <FileDownIcon className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center bg-white">
        <div className="max-w-xl w-full p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-green-700 mb-6">Crop Yield Prediction</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Temperature (°C)
                </label>
                <input
                  type="number"
                  name="avg_temp"
                  value={formData.avg_temp}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
                  placeholder="Enter average temperature"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rainfall (mm/year)
                </label>
                <input
                  type="number"
                  name="average_rain_fall_mm_per_year"
                  value={formData.average_rain_fall_mm_per_year}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
                  placeholder="Enter rainfall"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesticides (tonnes)
                </label>
                <input
                  type="number"
                  name="pesticides_tonnes"
                  value={formData.pesticides_tonnes}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
                  placeholder="Enter pesticide amount"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Crop
                </label>
                <select
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select crop</option>
                  {crops.map((crop) => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Area
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select area</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </form>

          {/* Chat-like result bubble */}
          {error && (
            <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          {predictionHistory.length > 0 && (
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-green-100 border border-green-300 text-green-900 px-4 py-4 rounded-2xl shadow max-w-lg w-fit">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="font-bold">Latest Prediction</span>
                </div>
                <div className="whitespace-pre-line text-sm">
                  {`Temperature: ${predictionHistory[0].avg_temp}°C
Rainfall: ${predictionHistory[0].average_rain_fall_mm_per_year}mm
Pesticide: ${predictionHistory[0].pesticides_tonnes} tonnes
Crop: ${predictionHistory[0].crop}
Area: ${predictionHistory[0].area}
Predicted Yield: ${predictionHistory[0].predicted_yield} tons/hectare`}
                </div>
                <div className="text-xs text-right text-gray-500 mt-2">{predictionHistory[0].timestamp}</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Prediction;