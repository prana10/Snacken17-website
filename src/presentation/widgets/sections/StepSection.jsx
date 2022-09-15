import React from 'react';

import NoteImage from '../../assets/illustrations/note.svg';
import rocketImage from '../../assets/illustrations/rocket.svg';
import okayImage from '../../assets/illustrations/like.svg';
import arrow from '../../assets/arrow.svg';
import { Fade } from 'react-reveal';

export default function StepSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Urutan Pembelian
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={NoteImage} className="w-60 h-60 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pilih Pesanan mu</h3>
                <p className="text-gray max-w-sm">
                  Pilih Pesanan sesuai dengan kebutuhanmu, dan pilih metode pembayaran yang kamu inginkan.
                  Kamu dapat memesan melalui website, aplikasi, atau melalui WhatsApp.
                </p>
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={rocketImage} className="w-60 h-60 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kami antar kan pesanan mu</h3>
                <p className="text-gray max-w-sm">
                  Kami akan mengantarkan pesananmu sesuai dengan alamat Kelas yang kamu masukkan.
                </p>
              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">
                <img src={okayImage} className="w-60 h-60 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4">Nikmati Pesanan mu</h3>
                <p className="text-gray max-w-sm">
                  Nikmati pesananmu, dan jangan lupa untuk memberikan review dan rating untuk kami.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
