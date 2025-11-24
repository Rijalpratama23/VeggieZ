import React from 'react';
import HumanIcon from '../../assets/HumanIcon.avif';


const Content = ({ nama, email, cardType }) => {
  return (
    <div className="bg-white rounded-2xl w-200 mx-5">
      <div className="p-5">
        {cardType}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="flex rounded-full border-2">
                <img src={HumanIcon} alt="picture" className="w-30 p-2 rounded-full" />
              </div>
              <div className="">
                <h3 className="font-actor text-xl font-medium">{nama}</h3>
                <p>{email}</p>
              </div>
            </div>
            <button className="py-2 px-4 primary text-white font-semibold rounded-2xl hover:cursor-pointer">Ubah Foto</button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" m-3">
            <h2 className="text-2xl font-actor mt-5 mb-5">Informasi Akun</h2>
            <div className="container w-120">
              <div className="subjek border rounded-2xl mb-4 sm:mb-5">
                <input type="text" placeholder="Nama" className="outline-none  m-3 w-full text-base sm:text-lg" />
              </div>
              <div className="subjek border rounded-2xl mb-4 sm:mb-5">
                <input type="email" placeholder="Email" className="outline-none m-3 w-full text-base sm:text-lg" />
              </div>
              <div className="subjek border rounded-2xl mb-4 sm:mb-5">
                <input type="text" placeholder="password" className="outline-none m-3 w-full text-base sm:text-lg" />
              </div>
              <div className="subjek border rounded-2xl mb-4 sm:mb-5">
                <input type="number" placeholder="No. HP" className="outline-none m-3 w-full text-base sm:text-lg" />
              </div>

              <div className="flex justify-center m-3 primary rounded-2xl border-none">
                <button className="py-3 px-5 font-actor text-white font-semibold">Simpan Perubahan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
