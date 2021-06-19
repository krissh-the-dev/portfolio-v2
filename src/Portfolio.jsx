import React, { useState, useEffect } from 'react';

import { Loader, Hero, About, Projects, OtherProjects, Statistics, Contact, Footer } from 'sections';
import { NavigationBar } from 'components';
import UpdateNotification from 'components/UpdateNotification/UpdateNotification';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Loader style={isLoading ? {} : { opacity: 0, visibility: 'hidden' }} />
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
