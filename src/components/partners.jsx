import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 

import 'slick-carousel/slick/slick-theme.css';


const Partners = () => {

  const companies = [

    { name: 'Addis Ababa University', logo: '/assets/aau_logo.jpg' },
  
    { name: 'EthioTelecom', logo: '/assets/tele_logo.jpeg' },
  
    { name: 'iCog Labs', logo: '/assets/icog_logo.png' },
  
    { name: 'Ethiopia Agriculture Ministry', logo: '/assets/ethioagri_logo.png' },
  
    { name: 'FAO', logo: '/assets/fao_logo.png' },
  
    { name: 'Evonext', logo: '/assets/my_lastest_logo.png' },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-green-100 py-12">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Partners</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center justify-center ">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="h-20 w-20  rounded-full mb-4 shadow-lg ml-35  *:hover:scale-105 transition-transform duration-300" 
              />
              <p className="text-center text-green-700 font-medium">{company.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;