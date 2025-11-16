import React from 'react';
import Header from '../../Components/Header';
import CardKeranjang from '../../Components/Keranjang/CardKeranjang';
import wortel from '../../assets/wortel.png';
import sawiImg from '../../assets/sawiImg.png';
import tomat from '../../assets/tomat.png';
import Ringkasan from '../../Components/Keranjang/Ringkasan';

const Keranjang = () => {
  // kode handle klik/props dll disini.

  return (
    <div className="overflow-hidden min-h-screen poster">
      <Header />
      <div className="bluelight p-5 md:p-10 m-6 md:m-25 rounded-2xl">
        <h2 className="font-primary text-3xl mb-6 md:px-16">Keranjang Pesanan</h2>
        <div className="content flex justify-between px-10">
          <div className="containerContent">
            <div className="mt-5 px-5 py-3 h-40 w-full md:h-96 overflow-y-auto">
              <CardKeranjang image={wortel} name="Wortel Segar" price="12.000/kg" />
              <CardKeranjang image={sawiImg} name="Sawi Hijau" price="29.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />

              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
            </div>
          </div>
          <div>
            <Ringkasan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
