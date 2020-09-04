import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';
import { TridentLogo, TridentLight } from '../../images/Trident';
import { AubitLogo, AubitMobile } from '../../images/Aubit';
import { SpadeLogo, Spade } from '../../images/Spade';

const collegemate = {
  title: 'Collegemate',
  type: 'featured project',
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
  type: 'featured project',
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
  type: 'Waiting for approval',
  logo: AubitLogo,
  images: {
    light: { small: AubitMobile, large: AubitMobile },
    dark: { small: AubitMobile, large: AubitMobile },
  },
  description: 'The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React.',
  features: [
    'Modern design',
    'Online Form downloads',
    'Reusable web components'
  ],
  techStack: ['React'],
  link: 'https://au-bit.netlify.app/',
  repo: undefined
};

const spade = {
  title: 'Spade',
  type: 'Under development',
  logo: SpadeLogo,
  images: {
    light: { small: Spade, large: Spade },
    dark: { small: Spade, large: Spade },
  },
  description: 'A simple and open source component library containing a huge collection of CSS only components as separate modules. Users can directly import them as modules or just use the code in their projects.',
  features: [
    'Button components',
    'Input components',
    'Switches',
    'Navigation bars',
    'Card components',
    'Sample forms'
  ],
  techStack: ['HTML', 'SCSS', 'Figma'],
  link: 'https://collegemate.herokuapp.com/',
  repo: undefined
};

const data = [collegemate, trident, aubit, spade];
export default data;
