import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';

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
    'Language recognition',
    'Syntax highlighting (not released)',
    'Customization options',
    'Auto save',
    'Compiling and executing',
    'Cross platform'
  ],
  techStack: ['React', 'Express', 'MongoDB', 'PWA'],
  link: 'https://collegemate.herokuapp.com/'
}

const data = [collegemate];
export default data;
