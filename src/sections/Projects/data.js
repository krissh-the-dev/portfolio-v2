import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';
import { TridentLogo, TridentLight } from '../../images/Trident';

const collegemate = {
  title: 'Collegemate',
  type: 'featured',
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
  type: 'featured',
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
  techStack: ['Java', 'Swing', 'Gradle', 'Cross-platform'],
  link: 'https://krishnamoorthy12.github.io/trident/',
  repo: 'https://github.com/KrishnaMoorthy12/trident'
}

const data = [collegemate, trident];
export default data;
