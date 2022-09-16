import React from 'react';
import { Fade } from 'react-reveal';
import { BsCheckCircleFill } from 'react-icons/bs';

import cimolImage from '../../assets/illustrations/cimol.png';
import PrimaryButton from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
export default function CimolMerconSection() {


  return (
    <section className="container mx-auto py-32 mb-24">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <p className='text-primary font-bold'>Makanan Ringan</p>
            <h2 className="text-natural0 font-bold text-4xl mb-6 leading-normal">Cimol Mercon</h2>
            <p className="text-natural0 mb-6">Terbuat dari adonan Tepung kanji yang di cetak<br />Tersedia dalam 3 level</p>

            <ul className="my-6">
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Tersedia Level 1, 2, dan 3
              </li>
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Tersedia Pre-Order
              </li>
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Mulai dari Rp.5000
              </li>
            </ul>

            <Link to='/form'>
              <PrimaryButton className="w-full">
                Buy Now
              </PrimaryButton>
            </Link>
          </div>
        </div>
        <div className='row-start-1 md:col-start-2 mb-12'>
          <Fade up collapse>
            <img src={cimolImage} alt="Cimol" className='' />
          </Fade>
        </div>
      </div>
    </section >
  );
}
