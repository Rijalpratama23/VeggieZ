import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Plus } from "lucide-react";
import Header from "../../Components/Header";
import wortel2 from "../../assets/wortel2.png";
import kentang from "../../assets/kentang.png";
import lobak from "../../assets/lobak.png";
import bawangMerah from "../../assets/bawangMerah.png";
import singkong from "../../assets/singkong.png";
import bitMerah from "../../assets/bitMerah.png";

const categories = [
  { name: "Sayur Daun", icon: "🥬" },
  { name: "Sayur Buah", icon: "🍅" },
  { name: "Sayur Umbi", icon: "🥕", active: true },
  { name: "Sayur Bunga", icon: "🥦" },
  { name: "Sayur Batang", icon: "🌿" },
];

const products = [
  { name: "Wortel", price: "Rp. 10.000/kg", image: wortel2 },
  { name: "Kentang", price: "Rp. 20.000/kg", image: kentang },
  { name: "Lobak", price: "Rp. 34.000/kg", image: lobak },
  { name: "Bawang Merah", price: "Rp. 12.000/250gr", image: bawangMerah },
  { name: "Singkong", price: "Rp. 15.000/kg", image: singkong },
  { name: "Bit Merah", price: "Rp. 33.000/kg", image: bitMerah },
];

const Product = () => {
  return (
    <div className="min-h-screen mt-20 poster p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8">
      {/* Header */}
      <Header />

      {/* Sidebar Kategori */}
      <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-lg p-4 sm:p-5 h-fit order-1 lg:order-none">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          Kategori
        </h2>
        <ul className="space-y-2 sm:space-y-3">
          {categories.map((cat, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl cursor-pointer transition-all ${
                cat.active
                  ? "bg-green-700 text-white shadow-md"
                  : "text-green-800 hover:bg-green-200"
              }`}
            >
              <span className="text-lg sm:text-xl">{cat.icon}</span>
              <span className="text-base sm:text-lg font-medium">
                {cat.name}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Grid Produk */}
      <main className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Bagian Atas - Gambar */}
            <div className="bg-[#e8ecff] p-4 sm:p-5 flex justify-center items-center h-32 sm:h-40 md:h-48">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-24 sm:h-28 md:h-36 transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Bagian Bawah - Info dan Tombol */}
            <div className="bg-white px-4 sm:px-5 py-3 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {item.price}
              </p>

              {/* Tombol */}
              <div className="flex justify-end gap-2 mt-auto">
                <button className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all">
                  <ShoppingCart size={16} className="sm:size-[18px]" />
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white p-1 sm:p-1.5 rounded-md transition-all">
                  <Plus size={16} className="sm:size-[18px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Product;
