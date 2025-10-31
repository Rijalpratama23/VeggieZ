import Header from '../../Components/Header';
import imgHome from '../../assets/imgHome.png';
import sayurBunga from '../../assets/sayurBunga.png';
import sayurDaun from '../../assets/sayurDaun.png';
import tomato from '../../assets/tomato.png';
import ubi from '../../assets/ubi.png';
import sawiImg from '../../assets/sawiImg.png';
import wortel from '../../assets/wortel.png';
import tomat from '../../assets/tomat.png';
import terong from '../../assets/terong.png'

const Home = () => {

    const categories = [
    { name: 'Sayur Daun', icon: sayurDaun },
    { name: 'Sayur Buah', icon: tomato },
    { name: 'Sayur Umbi', icon: ubi },
    { name: 'Sayur Bunga', icon: sayurBunga },
  ];

  const popularVegetables = [
    {
      id: 1,
      name: "Sawi Hijau",
      price: "Rp. 29.800/kg",
      image: sawiImg,
    },
    {
      id: 2,
      name: "Wortel",
      price: "Rp. 18.000/kg",
      image: wortel,
    },
    {
      id: 3,
      name: "Tomat",
      price: "Rp. 10.000/kg",
      image: tomat,
    },
    {
      id: 4,
      name: "Terong Ungu",
      price: "Rp. 7.000/kg",
      image: terong,
    },
  ];

  return (
    <div className="min-h-screen w-full secondary">

      {/* ✅ Navbar */}
      <Header />

      {/* ✅ Hero Section */}
      <section className="mt-12 py-12">
        <div className="max-w-7xl mx-auto shadow-2xl poster rounded-xl  px-25 flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <h1 className="text-xl text-shadow-sm md:text-shadow-sm font-kavoon md:text-4xl font-bold color-primary mb-3">
              Selamat Datang !!
            </h1>
            <h1 className="w-full md:w-208 text-xl md:text-4xl font-kavoon font-semibold color-primary mb-6 text-shadow-sm md:text-shadow-sm">
              Ciptakan pasar hijau digitalmu dengan VeggieZ
            </h1>
            <button className="bg-green-700 font-primary mt-3 text-xl md:text-3xl color-primary text-white rounded-md px-6 py-3 font-semibold">
              <a href="">Belanja Sekarang</a>
            </button>
          </div>

          {/* Placeholder Hero Image */}
          <img src={imgHome} alt="picture" className='w-auto h-90' />

        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto bg-white rounded-t-xl">
        <h2 className="text-xl md:text-2xl font-actor font-bold mb-6 text-green-800">
          Pilih Kategori Sayuran Pilihan Anda
        </h2>
        <div className="grid grid-cols-2 md:flex gap-4 md:gap-25 justify-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 md:gap-3 bg-gray-100 hover:bg-green-50 border border-gray-200 px-4 py-3 rounded-lg text-green-800 font-medium shadow-sm transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <img src={cat.icon} alt={cat.name} className="w-6 h-6" />
              <p className="text-sm md:text-base">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Produk Populer */}
          <section className="px-6 max-w-7xl mx-auto mb-10 bg-white">
      <h2 className="text-xl md:text-2xl font-medium font-actor mb-6">
        Sayur yang sedang Populer
      </h2>

      <div className="flex items-center justify-center md:justify-between">
        <button className="hidden md:block bg-green-600 text-white px-3 py-2 rounded-full">
          <a href=""> &lt; </a>  
        </button>

        {/* ✅ Menampilkan daftar produk */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {popularVegetables.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-b from-[#3A803E] to-[#D1DBD1] p-4 h-36 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-md"
                />
              </div>
              <div className="text-center py-4">
                <p className="font-semibold text-sm md:text-base">{item.name}</p>
                <p className="text-xs md:text-sm text-green-700 italic">
                  ({item.price})
                </p>
                <button className="mt-3 primary hover:bg-green-800 text-white px-5 py-1 md:py-2 rounded-md text-xs md:text-sm transition-all duration-300">
                  <a href="">ADD +</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden md:block bg-green-600 text-white px-3 py-2 rounded-full">
         <a href=""> &gt; </a> 
        </button>
      </div>
    </section>

    </div>
  );
};

export default Home;
