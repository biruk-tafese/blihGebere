import React from 'react';
import Hero from '../components/hero';
import HowItWorks from '../components/HowItWorks';
import Resource from '../components/resources';
import Partners from '../components/partners';

const HomePage = () => {
  return (
    <div>
      <main>
        <section id='/#home' className="w-full h-full">
          <Hero />
        </section>
        <section id='/#how-to-use' className="w-full h-full bg-gray-100">
            <HowItWorks />
          </section>
        <section id="/#resources " className="w-full h-full bg-white">
           <Resource />
          </section>

          <section id="/#partners " className="w-full h-full bg-white">
           <Partners />
          </section>
        
      </main>
    </div>
  );
};

export default HomePage;