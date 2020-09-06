import React from 'react';

import { Hero, About, Projects, OtherProjects, Statistics } from './sections';
import { NavigationBar } from './Components';

export default function Portfolio() {
  return (
    <>
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Statistics />
      </main>
    </>
  );
}
