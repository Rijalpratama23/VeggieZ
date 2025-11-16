import React from 'react';
import Header from '../../Components/Header';
import HumanIcon from '../../assets/HumanIcon.avif';

const Setting = () => {
  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 md:pt-30">
        <div className="md:flex justify-center">
          <button className="flex items-center gap-2 mr-55 cursor-pointer bg-white p-2 rounded-2xl">
            <i className="fa-solid fa-arrow-left  font-bold color-primary"></i>
            <p className="color-primary font-semibold font-actor">Kembali ke Beranda</p>
          </button>
          <div className=" flex justify-start  mr-156">
            <h2 className="font-medium text-3xl font-actor">PENGATURAN</h2>
          </div>
        </div>

        <div className="flex justify-between m-5 md:mx-18">
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
                <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center my-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
                  <i className="fa-solid fa-trash text-3xl"></i>
                  <h3 className="font-actor font-semibold text-xl">Hapus Akun</h3>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-full mx-5">
            <div className="p-5">
              <div className="">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <div className='flex rounded-full border-2'>
                      <img src={HumanIcon} alt="picture" className="w-30 p-2 rounded-full" />
                    </div>
                    <div className=''>
                      <h3 className='font-actor text-xl font-medium'>John Doe</h3>
                      <p>johndoe@gamil.com</p>
                    </div>
                  </div>
                  <button className='py-2 px-4 primary text-white font-semibold rounded-2xl hover:cursor-pointer'>Ubah Foto</button>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h2 className='text-2xl font-actor mt-5'>Informasi Akun</h2>
                  <div>
                    <div>
                      <input type="text" placeholder="Nama" />
                    </div>
                    <div>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div>
                      <input type="text" placeholder="Kata Sandi" />
                    </div>
                    <div>
                      <input type="text" placeholder="Nomor HP" />
                    </div>

                    <button>Simpan Perubahan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
