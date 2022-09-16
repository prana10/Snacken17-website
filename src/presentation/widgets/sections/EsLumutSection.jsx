import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import esLumut from '../../assets/illustrations/es_lumut.png';
import { Fade } from 'react-reveal';
import PrimaryButton from '../buttons/PrimaryButton';

import { Link } from 'react-router-dom';

export default function EsLumutSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
          <Fade up>
            <img src={esLumut} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <p className='text-primary font-bold'>Minuman</p>
            <h2 className="text-natural0 font-bold text-4xl mb-2 leading-normal">
              Es Lumut
            </h2>
            <p className='text-natural0'>Memiliki tampilan yang menarik<br />mengandung gizi yang baik untuk tubuh</p>
            <ul className="my-6">
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Kemasan yang Simple dan mudah dibawa kemana saja
              </li>
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Tersedia Pre-Order
              </li>
              <li className='mb-2 text-natural0'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Mulai dari Rp.3.000
              </li>
            </ul>

            <Link to='/form'>
              <PrimaryButton className="w-full">
                Buy Now
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
