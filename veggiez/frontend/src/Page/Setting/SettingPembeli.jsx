import React from 'react';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';
import TrashRead from '../../Components/Setting/TrashRed';

const SettingPembeli = () => {
  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 pb-5 md:pt-30">
        <Head />
        <div className="flex justify-between m-5 md:mx-18">
          <SideBar />
          <Content nama="John Doe" email="johndoe@gmail.com"/>
        </div>
      </div>
    </div>
  );
};

export default SettingPembeli;
