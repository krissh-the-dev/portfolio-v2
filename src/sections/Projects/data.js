import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';
import { SFPImageSmall, SFPImageLarge, SFPLogo } from '../../images/7days50projects';
import { AubitLogo, AubitMobile } from '../../images/Aubit';
import { LeetCodeLogo, LeetCode } from '../../images/LeetCode';

const collegemate = {
  title: 'Collegemate',
  type: 'Featured project',
  logo: CollegemateLogo,
  images: {
    light: { small: CollegemateDark, large: CollegemateDark },
    dark: { small: CollegemateDark, large: CollegemateDark }
  },
  description:
    'A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes.',
  features: [
    'Authentication system',
    'Email alerts',
    'File sharing',
    'Creating new posts and materials',
    'Scheduling based on current time',
    'Dark theme'
  ],
  techStack: ['React', 'Express', 'MongoDB', 'PWA'],
  link: 'https://collegemate.herokuapp.com/',
  repo: undefined
};

const $7d50p = {
  title: '7 Days 50 Projects',
  type: 'Featured project',
  logo: SFPLogo,
  images: {
    light: { small: SFPImageSmall, large: SFPImageLarge },
    dark: { small: SFPImageSmall, large: SFPImageLarge }
  },
  description:
    'A fun challenge, to complete a collection of 50 projects within 7 days, inspired from Brad Traversy and Florin Pop’s ‘50 Projects 50 Days’. Completed 20 projects and made contributions to 5+ other projects. Some projects I really like, that I made:',
  features: ['Theme clock', 'Testimonials', 'Movie app', 'Double click like'],
  techStack: ['Next JS', 'styled-components', 'TypeScript'],
  link: 'https://7days50projects.vercel.app/',
  repo: 'https://github.com/benxene/7days-50projects'
};

const aubit = {
  title: 'AU-BIT Unofficial website',
  type: 'Collaborated project',
  logo: AubitLogo,
  images: {
    light: { small: AubitMobile, large: AubitMobile },
    dark: { small: AubitMobile, large: AubitMobile }
  },
  description:
    'The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React.',
  features: ['Modern design', 'Online Form downloads', 'Reusable web components', 'Image Gallery'],
  techStack: ['React', 'SCSS'],
  link: 'https://au-bit.netlify.app/',
  repo: undefined
};

const leetCode = {
  title: 'LeetCode Time Tracker',
  type: 'Collaborated Project',
  logo: LeetCodeLogo,
  images: {
    light: { small: LeetCode, large: LeetCode },
    dark: { small: LeetCode, large: LeetCode }
  },
  description:
    'A Chrome extension to keep track of the problems solved and time taken to solve each problem in LeetCode. I have worked on the UI of the extension.',
  features: ['Counter', 'Data visualization', 'Export as CSV', 'Filter and Find', 'Cloud sync (coming soon)'],
  techStack: ['Chrome Extension', 'TypeScript', 'LeetCode API', 'SCSS'],
  repo: 'https://github.com/VarthanV/LeetCode-Time-Tracker',
  link:
    'https://chrome.google.com/webstore/detail/leetcode-time-tracker/obcihoolahbncgakepoceagnjnfgghhl?hl=en&authuser=0'
};

const data = [collegemate, leetCode, aubit, $7d50p];
export default data;
