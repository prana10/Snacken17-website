import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import target from '../../assets/illustrations/target.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-natural0 transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary text-natural0' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={target} alt="FAQ" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="text-natural0 font-bold text-4xl mb-6 leading-normal">
              Pertanyaan yang sering diajukan
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="Mengapa saya harus memilih Snacken?">
                Karena kami menyediakan produk yang berkualitas dan terpercaya. Kalian dapat memesan secara Pre-Order melalui Whatsapp langsung ataupun Lewat Website / Aplikasi.
              </FaqItem>
              <FaqItem open={false} title="Bagaimana Cara Memesan Lewat Whatsapp?">
                Untuk memesan lewat whatsapp secara langsung, silahkan ketik nama, kelas, makanan/minuman yang ingin di beli, lalu note (untuk catatan seperti ekstra bumbu).

              </FaqItem>
              <FaqItem open={false} title="bagaimana Caranya agar saya dapat membeli produk melalui website ?">
                Untuk Memesan Melalui Website kalian dapat buka website Snacken 17 lalu pilih makanan/minuman yang ingin dibeli, klik tombol "buy now" lalu dan klik tombol "buy now" nanti nya kalian akan diarahkan ke nomor whatsapp kami.
              </FaqItem>
              <FaqItem open={false} title="Selain melalui website, saya dapat membeli nya lewat platform apa ? ">
                Selain melalui website, kalian dapat memesan produk kami melalui aplikasi yang kami sediakan. dengan cara mengkilk tombol "download app" pada halaman utama kami dan pilih "android".
              </FaqItem>
              <FaqItem open={false} title="Apakah Aplikasi nya Tersedia untuk IOS / Iphone?">
                Untuk saat ini aplikasi kami hanya tersedia untuk android, untuk IOS / Iphone akan segera kami rilis.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
