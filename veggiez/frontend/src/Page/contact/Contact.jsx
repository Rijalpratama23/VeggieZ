import React from 'react';
import Header from '../../Components/Header';
import kontakImage from '../../assets/kontakImage.png'

const Contact = () => {
  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className='flex justify-center mt-25 px-4 sm:px-6 md:px-10'>
        <div className="container flex flex-col lg:flex-row justify-between content-center rounded-2xl poster w-full max-w-6xl">
          <div className="w-full flex flex-col lg:flex-row justify-between bg-white p-6 sm:p-8 md:p-10 rounded-2xl m-3 sm:m-5 shadow-xl/30">
            
            {/* Form Kontak */}
            <form action="" className='my-5 w-full lg:w-1/2'>
              <h1 className='font-acme text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-7 text-center lg:text-left'>Kontak Kami</h1>

              <div className="nama border rounded-2xl mb-4 sm:mb-5 w-full">
                <input type="text" placeholder="Nama" className='outline-none m-3 w-full text-base sm:text-lg' />
              </div>
              <div className="addrees border rounded-2xl mb-4 sm:mb-5">
                <input type="text" placeholder="Alamat Email" className='outline-none m-3 w-full text-base sm:text-lg'/>
              </div>
              <div className="subjek border rounded-2xl mb-4 sm:mb-5">
                <input type="text" placeholder="Subjek" className='outline-none m-3 w-full text-base sm:text-lg'/>
              </div>
              <div className='border rounded-2xl mb-4 sm:mb-5'>
                <textarea name="pesan" id="pesan" placeholder="Masukkan pesan anda" className='outline-none m-3 w-full h-24 sm:h-32 text-base sm:text-lg resize-none'></textarea>
              </div>

              <div className="btn primary rounded-2xl flex justify-center mb-5">
                <button className='p-2 sm:p-3 w-full sm:w-auto'>
                  <a href="" className='text-white text-lg sm:text-2xl'>Kirim Pesan</a>
                </button>
              </div>
            </form>

            {/* Gambar */}
            <img src={kontakImage} alt="picture" className='w-56 sm:w-72 md:w-96 lg:w-160 h-auto mx-auto lg:mx-0 mt-6 lg:mt-0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
