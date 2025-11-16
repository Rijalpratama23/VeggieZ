import React, { useState } from 'react';

const CardKeranjang = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      {/* CARD PRODUK */}
      <div className="flex items-center justify-between rounded-2xl shadow-md p-4 w-full mt-5 md:mt-8 max-w-md">
        {/* Gambar */}
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded-xl" />

        {/* Info Produk */}
        <div className="flex-1 ml-4">
          <h3 className="text-gray-900 font-actor font-medium text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{price}</p>
        </div>

        <div className='text-center'>
          {/* Ikon Hapus */}
          <button className="text-red-500 hover:text-red-600 pb-3 ml-4">
            <i className="fa-solid fa-trash text-xl"></i>
          </button>

          {/* Kontrol Jumlah */}
          <div className="flex items-center space-x-2 ml-3">
            <button onClick={decrease} className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-gray-100">
              −
            </button>
            <span className="font-medium">{quantity}</span>
            <button onClick={increase} className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-gray-100">
              +
            </button>
          </div>
        </div>
      </div>
      {/* END CARD */}
    </div>
  );
};

export default CardKeranjang;
