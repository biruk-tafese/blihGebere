import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12 lg:px-24">
    <div className=' mb-12  h-104'> 
      <img
        src="/src/assets/logo.jpeg"
        alt="Background"
        className=" inset-0 w-full h-full object-cover"
      />
     </div>
     {/* Header Section */}

     <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          "BlihGebere" means "Wise Farmer" in Amharic. We are dedicated to empowering farmers with AI-driven tools to optimize agricultural practices.
        </p>
      </div>
     
     

      {/* Mission, Vision, and Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Mission */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            src="/src/assets/img/crop_1.jpg"
            alt="Mission"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize agriculture by providing farmers with cutting-edge AI tools for better decision-making and increased productivity.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            src="/src/assets/img/crop_2.jpeg"
            alt="Vision"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To create a world where every farmer has access to technology that ensures sustainable and efficient farming practices.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            src="/src/assets/img/farm_ai.jpeg"
            alt="Values"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Values</h2>
          <p className="text-gray-600">
            Innovation, sustainability, and community empowerment are at the core of everything we do.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Founder 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/src/assets/founder1.jpg"
              alt="Founder 1"
              className="h-40 w-40 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Dr. Abebe Kebede</h3>
            <p className="text-gray-600">
              An agricultural scientist with 20+ years of experience in sustainable farming practices.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/src/assets/founder2.jpg"
              alt="Founder 2"
              className="h-40 w-40 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Ms. Sara Alemu</h3>
            <p className="text-gray-600">
              A tech entrepreneur passionate about leveraging AI to transform agriculture in Africa.
            </p>
          </div>

          {/* Founder 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/src/assets/founder3.jpg"
              alt="Founder 3"
              className="h-40 w-40 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Mr. Tesfaye Bekele</h3>
            <p className="text-gray-600">
              A data scientist specializing in AI-driven solutions for the agricultural sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;