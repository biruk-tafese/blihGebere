import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is BlihGebere?',
      answer: 'BlihGebere is an AI-powered platform designed to help farmers optimize their agricultural practices through crop prediction and resource management.',
    },
    {
      question: 'How does the crop prediction work?',
      answer: 'Our AI analyzes parameters like temperature, humidity, soil pH, and rainfall to provide accurate crop yield predictions.',
    },
    {
      question: 'Is BlihGebere free to use?',
      answer: 'We offer both free and premium plans. The free plan includes basic features, while the premium plan provides advanced tools and analytics.',
    },
    {
      question: 'How do I register for an account?',
      answer: 'Click on the "Register" button on the homepage and fill out the required details to create an account.',
    },
    {
      question: 'What data do I need to provide for crop prediction?',
      answer: 'You need to provide data such as temperature, humidity, soil pH, rainfall, and nutrient levels like nitrogen and phosphorus.',
    },
    {
      question: 'Can I access BlihGebere on my mobile device?',
      answer: 'Yes, BlihGebere is fully responsive and can be accessed on mobile devices, tablets, and desktops.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support via email at support@blihgebere.com or through the "Support" page on our website.',
    },
    {
      question: 'Is my data secure on BlihGebere?',
      answer: 'Yes, we prioritize data security and use encryption to protect your information.',
    },
    {
      question: 'Can I share my crop prediction results?',
      answer: 'Yes, you can share your results with others via email or by exporting them as a report.',
    },
    {
      question: 'What languages does BlihGebere support?',
      answer: 'Currently, BlihGebere supports English and Amharic, with plans to add more languages in the future.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left px-6 py-4 text-lg font-medium text-green-800 flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <span className="text-green-600">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;