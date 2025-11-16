import React from 'react';
import imgHome from '../../assets/imgHome.png';
import ButtonHome from '../../Components/Home/ButtonHome'

const ContentHome = () => {
  return (  
    <section className="mt-12 py-12">
      <div className="max-w-7xl mx-auto shadow-2xl poster rounded-xl  px-25 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-xl text-shadow-sm md:text-shadow-sm font-kavoon md:text-4xl font-bold color-primary mb-3">Selamat Datang !!</h1>
          <h1 className="w-full md:w-208 text-xl md:text-4xl font-kavoon font-semibold color-primary mb-6 text-shadow-sm md:text-shadow-sm">Ciptakan pasar hijau digitalmu dengan VeggieZ</h1>
            <ButtonHome />
        </div>

        {/* Placeholder Hero Image */}
        <img src={imgHome} alt="picture" className="w-auto h-90" />
      </div>
    </section>
  );
};

export default ContentHome;
