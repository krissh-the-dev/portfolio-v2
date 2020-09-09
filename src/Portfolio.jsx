import React from 'react';

import { Loader, Hero, About, Projects, OtherProjects, Statistics, Contact, Footer } from './sections';
import { NavigationBar } from './Components';

export default function Portfolio() {
  return (
    <>
      <Loader />
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
