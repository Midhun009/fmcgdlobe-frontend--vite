import '../components/About/AboutSection';
import AboutSection from '../components/About/AboutSection';
import TeamSection from '../components/About/TeamSection';
import WorkingProcessSection from '../components/About/WorkingProcessSection';
import LatestNews from '../components/Sections/LatestNews';
import React from 'react';
import SubscribeSection from '../components/Sections/SubscribeSection';

const AboutBreadcrbms = () => {
  return (
    <>
      <AboutSection />
      <WorkingProcessSection />
      <TeamSection />
      <LatestNews />
      <SubscribeSection />
    </>
  );
};

export default AboutBreadcrbms;