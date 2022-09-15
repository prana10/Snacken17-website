import React from 'react';

import Layout from '../widgets/Layout';
import LandingSection from '../widgets/sections/LandingSection';
import CimolMerconSection from '../widgets/sections/CimolMerconSection';
import EsLumutSection from '../widgets/sections/EsLumutSection';
import StepSection from '../widgets/sections/StepSection';
import FaqSection from '../widgets/sections/FaqSection';
import BackToTopSection from '../widgets/sections/BackToTopSection';

export default function index() {
  return (
    <Layout>
      <LandingSection />
      <CimolMerconSection />
      <EsLumutSection />
      <StepSection />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}
