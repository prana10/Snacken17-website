import React from 'react';

import DropdownMenu from './DropdownMenu';

export default function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="/" className='text-natural0 hover:text-primary py-2 block'>Home</a>
      </div>
      <div className="w-full">
        <a href="/" className='text-natural0 hover:text-primary py-2 block'>About</a>
      </div>
      <div className="w-full">
        <a href="/contact" className='text-natural0 hover:text-primary py-2 block'>Contact</a>
      </div>

      <DropdownMenu>
        <div className="w-full">
          <a href="/" className='text-natural0 hover:text-primary py-2 block'>Cimol Mercon</a>
        </div>
        <div className="w-full">
          <a href="/" className='text-natural0 hover:text-primary py-2 block'>Es Lumut</a>
        </div>
      </DropdownMenu>
    </>
  );
}
