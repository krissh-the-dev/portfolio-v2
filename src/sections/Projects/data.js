import { AubitLogo, AubitMobile } from '../../images/Aubit';
import { CollegemateDark, CollegemateLogo } from '../../images/Collegemate';
import { TSSLogo, TheSecretStore } from '../../images/TheSecretStore';
import { InfiniteLoopClub, InfiniteLoopClubLogo } from '../../images/InfiniteLoopClub';
import { SFPImageLarge, SFPImageSmall, SFPLogo } from '../../images/7days50projects';

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

const tss = {
  title: 'The Secret Store',
  type: 'Featured Project',
  logo: TSSLogo,
  images: { small: TheSecretStore, large: TheSecretStore },
  dark: { small: TheSecretStore, large: TheSecretStore },
  description: 'The Secret Store is a platform to share and synchronize your project configuration environment variables with your team without having to send a bunch of e-mails back and forth with simple commands like in git. It\'s Forever FOSS (Free and Open Source Software). You can fork and create your copy, and utilize it for your personal / internal use within your organization.',
  features: ['Command Line Interface', 'AES 256 Encryption', 'Google OAuth', 'Token Based Authentication', 'Granular Permissions', 'Simple commands inspired by Git'],
  techStack: ['Nx Monorepo', 'Nest JS', 'React JS'],
  link: undefined,
  repo: 'https://github.com/the-secret-store/monorepo'
}

const ilc = {
  title: 'Infinite Loop Club website',
  type: 'Collaborated project',
  logo: InfiniteLoopClubLogo,
  images: {
    light: { small: InfiniteLoopClub, large: InfiniteLoopClub },
    dark: { small: InfiniteLoopClub, large: InfiniteLoopClub }
  },
  description:
    'The official website of the Infinite Loop Club of Anna University, Trichy. I have worked on both frontend and backend of this website and also designed most of the elements.',
  features: ['Registration', 'Online ID Generation', 'Post sharing', 'Online polling system'],
  techStack: ['React JS', 'Express JS', 'Mongo DB'],
  link: 'https://infinite-loop-club.netlify.app/',
  repo: 'https://github.com/Infinite-Loop-Club/club-site'
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
  link: 'https://aubit.netlify.app/',
  repo: undefined
};

const data = [collegemate, tss, ilc, aubit, $7d50p];
export default data;
