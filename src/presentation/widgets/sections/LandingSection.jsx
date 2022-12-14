import React from 'react';
import { FaWindows, FaLinux, FaAndroid, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import abstractImage from '../../assets/illustrations/abstractImage.png';
import PrimaryButton from '../buttons/PrimaryButton';
import BlueCircleParticle from '../particles/BlueCircleParticle';
import OrangeCircleParticle from '../particles/OrangeCircleParticle';
import StarParticle from '../particles/StarParticle';
import PurpleCircleParticle from '../particles/PurpleCircleParticle';
import DropdownButton from '../buttons/DropdownButton';

export default function LandingSection() {

  const scrollDownMethod = (ref) => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  const openWhatsapp = () => {
    const note = 'Hi, saya ingin memesan ... dengan jumlah ...  dan saya ingin memesannya untuk tanggal .... nama ... kelas ... (khusus siswa/guru smkn 17). Rasa ... (khusus Cimol). Note .. Terima kasih.';
    window.open('https://wa.me/6281293515740?text=' + note, '_blank');
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/snacken.17/', '_blank');
  }

  return (
    <section className='relative pt-[140px] pb-32'>
      <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />

      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className='flex items-center'>
          <div className='relative'>
            <StarParticle className="absolute top-0 right-0" />
            <PurpleCircleParticle className="absolute bottom-0 -left-12" />

            <p className='text-primary'>MODERN OUTLET</p>
            <h1 className='text-natural0 text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
              Snacken 17 <br />
              <span className=' text-primary'>Modern Outlet</span> <br />
              untuk siswa SMKN 17
            </h1>
            <div className="mt-6 mb-8 col-span-2 flex lg:flex-row gap-4 md:flex-row">
              <FaWhatsapp className="text-2xl text-green-500 w-35 h-35" onClick={openWhatsapp} />
              <FaInstagram className="text-2xl text-pink-500 w-35 h-35" onClick={openInstagram} />
            </div>
            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
              <PrimaryButton className="w-full lg:w-auto mb-6 lg:mb-0" onClick={scrollDownMethod}>
                Get Started
              </PrimaryButton>
              <DropdownButton name="Download App" className="w-full lg:w-auto">
                <a href="/download/windows" target="_blank" className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white">
                  <FaWindows className='inline mr-2' /> Windows
                </a>
                <a href="/download/linux" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaLinux className='inline mr-2' /> Linux
                </a>
                <a href="/download/android" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaAndroid className='inline mr-2' /> Android
                </a>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <BlueCircleParticle className="absolute top-0 left-11 duration-[5s]" />
          <OrangeCircleParticle className="absolute bottom-1/4 right-0" />

          <img src={abstractImage} alt="Snacken 17" className='landingImage' />
        </div>
      </div>
    </section >
  );
}
