import React from 'react';
import Lottie from 'react-lottie-player';

import Layout from '../widgets/Layout';
import error500Animation from '../assets/Lottie/404-website-error-animation.json';

export default function Error500() {
  return (
    <Layout>
      <div className="flex justify-center h-screen items-center">
        <div className="text-center">
          <Lottie animationData={error500Animation} loop play />
          <span className="text-lg text-primary">Internal Server Error :(</span>
        </div>
      </div>
    </Layout>
  );
}
