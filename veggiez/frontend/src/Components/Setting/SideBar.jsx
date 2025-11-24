import React from 'react';
import TrashRead from './TrashRed'
import { Trash } from 'lucide-react';

const SideBar = () => {
  return (
    <div className=" bg-new rounded-2xl w-100">
      <div className="p-5 flex justify-center item-center">
        <div className="">
          <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center my-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
            <i className="fa-solid fa-user text-3xl"></i>
            <h3 className=" font-actor font-semibold text-xl">Informasi Akun</h3>
          </button>
          <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
            <i class="fa-solid fa-house text-3xl"></i>
            <h3 className="font-actor font-semibold text-xl">Alamat Pengiriman</h3>
          </button>
          <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
            <i className="fa-solid fa-credit-card text-3xl"></i>
            <h3 className="font-actor font-semibold text-xl">Metode Pembayaran</h3>
          </button>
          <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
            <i className="fa-solid fa-bell text-3xl"></i>
            <h3 className="font-actor font-semibold text-xl">Notifikasi</h3>
          </button>
          <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
            <i className="fa-solid fa-shield text-3xl"></i>
            <h3 className="font-actor font-semibold text-xl">Keamanan & Privasi</h3>
          </button>
         <TrashRead RedTrash="red"  />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
