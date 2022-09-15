import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../widgets/Footer';
import Navbar from '../../widgets/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
