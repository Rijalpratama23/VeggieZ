import React from 'react';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';

const SettingPenjual = () => {
  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 pb-5 md:pt-30">
        <Head />
        <div className="flex justify-between m-5 md:mx-18">
          <SideBar />
          <Content
            nama="Muhammad Sumbul"
            email="sumbulzz17@gmail.com"
            cardType={
              <div className="flex  justify-center font-actor font-semibold text-3xl">
                <div className='flex justify-center primary p-3 rounded-2xl text-white shadow-2xl relative top-3'>SUPLIER</div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SettingPenjual;
