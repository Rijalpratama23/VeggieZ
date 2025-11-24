import React from 'react';
import Header from '../../Components/Header';
import imageAbout from '../../assets/imageAbout.png';
import rijal from '../../assets/rijal.jpg';
import rendi from '../../assets/rendi.jpg';
import mughis from '../../assets/mughis.jpg';
import hazmi from '../../assets/hazmi.jpg';

const About = () => {
  return (
    <div className="min-h-screen secondary pb-15">
      <Header />
      <div className="poster flex justify-center mx-4 sm:mx-8 md:mx-18 my-10 sm:my-15 md:my-25 rounded-2xl">
        <div className="bg-white w-full sm:w-11/12 md:w-285 my-10 sm:my-15 mx-4 sm:mx-10 md:mx-15 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl/20">
          <h1 className="font-acme text-3xl sm:text-4xl md:text-5xl color-primary mb-5 text-center md:text-left">
            TENTANG KAMI
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
            <div className="mb-5 md:w-1/2">
              <p className="text-justify text-sm sm:text-base">
                VeggieZ adalah e-commerce sayuran segar asal Sukabumi yang menghadirkan hasil tani terbaik langsung dari petani lokal. Kami percaya bahwa kesegaran dan kualitas adalah kunci hidup sehat.
              </p>

              <div className="mt-5">
                <h2 className="color-primary font-acme text-2xl sm:text-3xl mb-5">Visi & Misi</h2>
                <p className="text-justify text-sm sm:text-base">
                  Menjadi platform sayuran terpercaya yang menghubungkan petani lokal dengan masyarakat, serta menyediakan produk segar, sehat, dan berkualitas untuk semua.
                </p>
              </div>
            </div>
            <div className="h-auto pt-5 md:pt-20 md:h-58 w-full md:w-auto flex justify-center items-center">
              <img
                src={imageAbout}
                alt="picture"
                className="w-64 sm:w-80 md:w-313 pb-5 md:pb-20"
              />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="color-primary font-acme text-2xl sm:text-3xl mb-5 text-center md:text-left">Tim Kami</h2>
            <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-0 mx-2 sm:mx-5">
              <div className="w-32 sm:w-40 text-center">
                <img src={mughis} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
                <p className="text-center text-sm sm:text-base mt-2">Mughis Fadhil A.Ridwan</p>
                <p className="text-center color-primary text-xs sm:text-sm">(Project Manager)</p>
              </div>
              <div className="w-32 sm:w-40 text-center">
                <img src={rijal} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
                <p className="text-center text-sm sm:text-base mt-2">Rijal Pratama</p>
                <p className="text-center color-primary text-xs sm:text-sm">(System Developer)</p>
              </div>
              <div className="w-32 sm:w-40 text-center">
                <img src={hazmi} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
                <p className="text-center text-sm sm:text-base mt-2">Muhammad Hazmi ZK</p>
                <p className="text-center color-primary text-xs sm:text-sm">(Graphic Designer)</p>
              </div>
              <div className="w-32 sm:w-40 text-center">
                <img src={rendi} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
                <p className="text-center text-sm sm:text-base mt-2">Rendi Ruswandi</p>
                <p className="text-center color-primary text-xs sm:text-sm">(System Analytics)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

