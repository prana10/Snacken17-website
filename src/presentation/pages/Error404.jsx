import React from 'react';
import Lottie from 'react-lottie-player';

import Layout from '../widgets/Layout';
import error404Animation from '../assets/Lottie/404-website-error-animation.json';

export default function Error404() {
  return (
    <Layout>
      <div className="flex justify-center h-screen items-center">
        <div className="text-center">
          <Lottie animationData={error404Animation} loop play />
          <span className="text-lg text-primary">We cannot find your page</span>
        </div>
      </div>
    </Layout>
  );
}
