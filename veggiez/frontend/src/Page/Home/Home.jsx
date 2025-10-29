import React, { useState } from 'react';
import LogoHome from '../../assets/LogoHome.png';
import imgHome from '../../assets/imgHome.png';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full secondary">

      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 secondary">
        <div className="bg-white my-5 max-w-7xl mx-auto rounded-xl shadow-xl flex items-center justify-between md:px-6 py-3">

          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img src={LogoHome} alt="Logo Home" className="w-35 md:w-36" />
            </a>
          </div>

          {/* ✅ Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-lg font-medium text-gray-700">
              <li><a href="#" className="color-primary">Home</a></li>
              <li><a href="#" className="color-primary">Shop</a></li>
              <li><a href="#" className="color-primary">Product</a></li>
              <li><a href="#" className="color-primary">Contact</a></li>
              <li><a href="#" className="color-primary">About</a></li>
            </ul>
          </nav>

          {/* ✅ Search + Icons Desktop */}
          <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
            <div className="flex items-center">
              <a href=""><i class="fa-solid fa-gear color-primary"></i></a>
              <input
                type="text"
                placeholder="Cari Produk"
                className="border px-4 py-1 ml-5 rounded-full text-sm mr-2"
              />
              <i className="fa-solid fa-magnifying-glass cursor-pointer color-primary"></i>
            </div>
            <a href=""><i className="fa-solid fa-user cursor-pointer color-primary"></i></a>
            <a href=""><i className="fa-solid fa-cart-shopping cursor-pointer color-primary"></i></a>
          </div>

          {/* ✅ Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-4">
            <ul className="flex flex-col gap-4 text-gray-700 text-lg font-medium">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <div className="flex gap-4 text-xl pt-2">
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </ul>
          </div>
        )}
      </header>

      {/* ✅ Hero Section */}
      <section className="mt-12 py-12">
        <div className="max-w-7xl mx-auto shadow-2xl poster rounded-xl  px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-kavoon md:text-3xl font-bold color-primary mb-3">
              Selamat Datang !!
            </h1>
            <p className="text-5xl md:text-xl font-kavoon font-semibold color-primary mb-6">
              Ciptakan pasar hijau digitalmu dengan VeggieZ
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white rounded-md px-6 py-3 font-semibold">
              Belanja Sekarang
            </button>
          </div>

          {/* Placeholder Hero Image */}
          <img src={imgHome} alt="picture" className='w-100 h-100' />

        </div>
      </section>

      {/* ✅ Kategori */}
      <section className="py-10 px-6 max-w-7xl mx-auto bg-white">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Pilih Kategori Sayuran Pilihan Anda</h2>
        <div className="grid grid-cols-2 md:flex gap-4 md:gap-6">
          {["Sayur Daun", "Sayur Buah", "Sayur Umbi", "Sayur Bunga"].map((cat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 md:gap-3 bg-gray-200 px-4 py-3 rounded-lg text-gray-700 justify-center"
            >
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              <p className="text-sm md:text-base">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Produk Populer */}
      <section className="px-6 max-w-7xl mx-auto mb-10 bg-white">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Sayur yang sedang Populer</h2>

        <div className="flex items-center justify-center md:justify-between">
          <button className="hidden md:block bg-green-600 text-white px-3 py-2 rounded-full">
            &lt;
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="bg-gradient-to-b from-green-300 to-green-100 p-4 h-32 md:h-36 flex justify-center items-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                </div>
                <div className="text-center py-4">
                  <p className="font-semibold text-sm md:text-base">Nama Sayur</p>
                  <p className="text-xs md:text-sm text-gray-600">Rp. 0/kg</p>
                  <button className="mt-3 bg-green-700 hover:bg-green-800 text-white px-4 py-1 md:py-2 rounded-md text-xs md:text-sm">
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
