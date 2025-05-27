import React from 'react';
import emebetphoto from '../assets/emebet_photo.jpg';
import minasiephoto from '../assets/minsie_simon_photo.jpg';
import yonasphoto from '../assets/yonas_buzuayehu_photo.jpg';
import tamiratphoto from '../assets/tamirate_demeke_photo.jpg';
import selassieHaile from '../assets/SeifeselasseHailu .jpg';

const founders = [
  {
    name: "Emebet Sisay",
    photo: emebetphoto,
    roles: [
      "Frontend Developer",
      "Team Lead",
      "Documentation Specialist"
    ]
  },
  {
    name: "Minasie Simon",
    photo: minasiephoto,
    roles: [
      "AI Training",
      "Ux/UI"
    ]
  },
  {
    name: "Yonas Buzuayehu",
    photo: yonasphoto,
    roles: [
      "Model Trainer",
      "Documentation Work"
    ]
  },
  {
    name: "Tamirat Demeke",
    photo: tamiratphoto,
    roles: [
      "UX/UI",
      "Documentation"
    ]
  },
  {
    name: "Seifeselasse Hailu",
    photo: selassieHaile,
    roles: [
      "Backend Developer",
      "Documentation Specialist",
    ]
  }
];

const About = () => {
  return (
    <div className="bg-gradient-to-br bg-[url('/assets/img/crop_1.jpg')] to-white min-h-screen py-12 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-300">
          "BlihGebere" means "Wise Farmer" in Amharic. We are dedicated to empowering farmers with AI-driven tools to optimize agricultural practices.
        </p>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Mission */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-2xl p-6 text-center">
          <img
            src="/assets/img/crop_1.jpg"
            alt="Mission"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Our Mission</h2>
          <p className="text-gray-300">
            To revolutionize agriculture by providing farmers with cutting-edge AI tools for better decision-making and increased productivity.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-2xl p-6 text-center">
          <img
            src="/assets/img/crop_2.jpeg"
            alt="Vision"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Our Vision</h2>
          <p className="text-gray-300">
            To create a world where every farmer has access to technology that ensures sustainable and efficient farming practices.
          </p>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-2xl p-6 text-center">
          <img
            src="/assets/img/farm_ai.jpeg"
            alt="Values"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Our Values</h2>
          <p className="text-gray-300">
            Innovation, sustainability, and community empowerment are at the core of everything we do.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
          Meet Our Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-2xl p-6 text-center"
            >
              <img
                src={founder.photo}
                alt={founder.name}
                className="h-40 w-40 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-green-400 mb-2">{founder.name}</h3>
              <p className="text-gray-300">
                {founder.roles.map((role, i) => (
                  <span key={i}>
                    <span className="font-bold">{role}</span>
                    {i < founder.roles.length - 1 && (
                      <span className="text-green-400"> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;