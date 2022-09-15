import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import logo from '../../assets/logo.svg';
import PrimaryButton from '../../widgets/buttons/PrimaryButton';

export default function Footer() {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6 ">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className='mb-6'>
              <img src={logo} alt="Snacken 17" className='w-44 h-44' />
            </div>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Home</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>About Us</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Contact</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Products</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Help Center</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Contact Us</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>System Status</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Area Avaibility</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-natural0 hover:text-primary'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className='text-natural0'>Newsletter</span>
            <p className='text-natural0 font-thin'>Never miss any products from us</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-natural0">© Copyright 2022 Snacken LLC. All rights reserved</p>
        <small className='text-natural0'>
          Design & Code by Prana dhikasara, checkout the repository <a href="/" className="text-primary" target="_blank" rel='noreferrer'>here</a>
        </small>
      </div>
    </footer>
  );
}
