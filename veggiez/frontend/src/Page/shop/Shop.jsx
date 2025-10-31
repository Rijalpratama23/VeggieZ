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

const Shop = () => {

  return (
    <div className="min-h-screen mt-20 poster p-10 flex gap-8">
      {/* Header */}
      <Header />

      {/* Sidebar Kategori */}
      <aside className="w-64 mt-25 bg-white rounded-2xl shadow-lg p-5 h-fit">
        <h2 className="text-2xl font-bold text-center mb-6">Kategori</h2>
        <ul className="space-y-3">
          {categories.map((cat, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all ${
                cat.active
                  ? "bg-green-700 text-white shadow-md"
                  : "text-green-800 hover:bg-green-200"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-lg font-medium">{cat.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Grid Produk */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Bagian Atas - Gambar */}
            <div className="bg-[#e8ecff] p-5 flex justify-center items-center h-48">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-36 transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Bagian Bawah - Info dan Tombol */}
            <div className="bg-white px-5 py-3 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.price}</p>

              {/* Tombol */}
              <div className="flex justify-end gap-2 mt-auto">
                <button className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-1 px-3 py-1.5 rounded-md transition-all">
                  <ShoppingCart size={18} />
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white p-1.5 rounded-md transition-all">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Shop;
