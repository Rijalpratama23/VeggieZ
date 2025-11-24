import React from 'react';
import { useNavigate } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();
  return (
    <div className="md:flex justify-center">
      <button className="flex items-center gap-2 mr-55 cursor-pointer bg-white p-2 rounded-2xl"  onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left  font-bold color-primary"></i>
        <p className="color-primary font-semibold font-actor">Kembali ke Beranda</p>
      </button>
      <div className=" flex justify-start  mr-156">
        <h2 className="font-medium text-3xl font-actor">PENGATURAN</h2>
      </div>
    </div>
  );
};

export default Head;
