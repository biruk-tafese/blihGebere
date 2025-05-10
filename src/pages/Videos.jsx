import React from 'react';

const Videos = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-12 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          Agriculture & Crop Prediction Videos
        </h1>
        <p className="text-lg text-gray-300">
          Explore these videos to learn more about agriculture, crop prediction, and how technology is transforming farming practices.
        </p>
      </div>

      {/* Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Video 1 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/3yXKvW8r3u4"
            title="AI in Agriculture"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-xl font-semibold text-green-400 mt-4">AI in Agriculture</h2>
          <p className="text-gray-300">
            Learn how artificial intelligence is revolutionizing agriculture and helping farmers make better decisions.
          </p>
        </div>

        {/* Video 2 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/5dVcn8N3nRc"
            title="Crop Prediction Technology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-xl font-semibold text-green-400 mt-4">Crop Prediction Technology</h2>
          <p className="text-gray-300">
            Discover how crop prediction technology is helping farmers optimize their yields and reduce risks.
          </p>
        </div>

        {/* Video 3 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/7Pq-S557XQU"
            title="Future of Farming"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-xl font-semibold text-green-400 mt-4">The Future of Farming</h2>
          <p className="text-gray-300">
            Explore the future of farming with AI-driven tools and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;