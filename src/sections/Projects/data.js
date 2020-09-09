import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';
import { TridentLogo, TridentLight } from '../../images/Trident';
import { AubitLogo, AubitMobile } from '../../images/Aubit';
import { LeetCodeLogo, LeetCode } from '../../images/LeetCode';

const collegemate = {
  title: 'Collegemate',
  type: 'Featured project',
  logo: CollegemateLogo,
  images: {
    light: { small: CollegemateDark, large: CollegemateDark },
    dark: { small: CollegemateDark, large: CollegemateDark },
  },
  description: 'A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes.',
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

const trident = {
  title: 'Trident',
  type: 'Featured project',
  logo: TridentLogo,
  images: {
    light: { small: TridentLight, large: TridentLight },
    dark: { small: TridentLight, large: TridentLight },
  },
  description: 'A pretty text/ code editor built with Java swing.',
  features: [
    'Language recognition',
    'Syntax highlighting (not released)',
    'Customization options',
    'Auto save',
    'Compiling and executing',
    'Cross platform'
  ],
  techStack: ['Java', 'Swing', 'Gradle'],
  link: 'https://krishnamoorthy12.github.io/trident/',
  repo: 'https://github.com/KrishnaMoorthy12/trident'
};

const aubit = {
  title: 'AU-BIT Unofficial website',
  type: 'Collaborated project',
  logo: AubitLogo,
  images: {
    light: { small: AubitMobile, large: AubitMobile },
    dark: { small: AubitMobile, large: AubitMobile },
  },
  description: 'The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React.',
  features: [
    'Modern design',
    'Online Form downloads',
    'Reusable web components',
    'Image Gallery'
  ],
  techStack: ['React', 'SCSS'],
  link: 'https://au-bit.netlify.app/',
  repo: undefined
};

const leetCode = {
  title: 'LeetCode Time Tracker',
  type: 'Under development',
  logo: LeetCodeLogo,
  images: {
    light: { small: LeetCode, large: LeetCode },
    dark: { small: LeetCode, large: LeetCode },
  },
  description: 'A Chrome extension to keep track of the problems solved and time taken to solve each problem in LeetCode. I have worked on the UI of the extension.',
  features: [
    'Counter',
    'Data visualization',
    'Export as CSV',
    'Filter and Find',
    'Cloud sync (coming soon)'
  ],
  techStack: ['Chrome Extension', 'TypeScript', 'LeetCode API', 'SCSS'],
  repo: 'https://github.com/VarthanV/LeetCode-Time-Tracker',
  link: 'https://chrome.google.com/webstore/detail/leetcode-time-tracker/obcihoolahbncgakepoceagnjnfgghhl?hl=en&authuser=0'
};

const data = [collegemate, leetCode, aubit, trident];
export default data;
