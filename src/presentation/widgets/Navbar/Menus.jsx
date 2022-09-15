import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

export default function Menus() {
  const scrollDownMethodCimol = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  };

  const scrollDownMethodEsLumut = () => {
    window.scrollTo({
      top: 1600,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className="w-full">
        <Link to="/" className='text-natural0 hover:text-primary py-2 block'>Home</Link>

      </div>
      <div className="w-full">
        <Link to="/about" className='text-natural0 hover:text-primary py-2 block'>About</Link>

      </div>
      <div className="w-full">
        <Link to="/contact" className='text-natural0 hover:text-primary py-2 block'>Contact</Link>
      </div>

      <DropdownMenu>
        <div className="w-full">
          <button onClick={scrollDownMethodCimol} className='text-natural0 hover:text-primary py-2 block'>Cimol Mercon</button>
        </div>
        <div className="w-full">
          <button onClick={scrollDownMethodEsLumut} className='text-natural0 hover:text-primary py-2 block'>Es Lumut</button>
        </div>
      </DropdownMenu>
    </>
  );
}
