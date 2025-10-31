import React from 'react';
import Header from '../../Components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen secondary">
      <div className="container">
        <div>
            <h1>Kontak Kami</h1>
          <form action="">
            <div className="nama">
                <input type="text" placeholder='Nama' />
            </div>
            <div className="addrees">
                <input type="text" placeholder='Alamat Email' />
            </div>
            <div className='subjek'>
                <input type="text" placeholder='Subjek'/>
            </div>
            <input type="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
