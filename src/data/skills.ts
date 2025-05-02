import { SkillType } from '@/components/SkillsGroup';

interface SkillsType {
  [key: string]: SkillType[];
}

const skills: SkillsType = {
  fundamentals: [
    { value: 'html', name: 'HTML', image: '/icons/html.png' },
    { value: 'css', name: 'CSS', image: '/icons/css.png' },
    {
      value: 'javascript',
      name: 'JavaScript',
      image: '/icons/javascript.png',
    },
    {
      value: 'github',
      name: 'Github',
      image: '/icons/github.png',
    },
  ],
  frameworks: [
    { value: 'react', name: 'React', image: '/icons/react.svg' },
    { value: 'vue', name: 'Vue', image: '/icons/vue.svg' },
    {
      value: 'angular',
      name: 'Angular',
      image: '/icons/angular.png',
    },
    { value: 'svelte', name: 'Svelte', image: '/icons/svelte.svg' },
    { value: 'ember', name: 'Ember', image: '/icons/ember.svg' },
    { value: 'redux', name: 'Redux', image: '/icons/redux.svg' },
    {
      value: 'typescript',
      name: 'TypeScript',
      image: '/icons/typescript.png',
    },
    { value: 'node', name: 'Node', image: '/icons/node.svg' },
    {
      value: 'express',
      name: 'Express',
      image: '/icons/express.svg',
    },
    { value: 'mongodb', name: 'MongoDB', image: '/icons/database.png' },
    { value: 'postgres', name: 'Postgres', image: '/icons/postgres.svg' },
    { value: 'python', name: 'Python', image: '/icons/python.svg' },
    {
      value: 'django',
      name: 'Django',
      image: '/icons/django.svg',
    },
    { value: 'flask', name: 'Flask', image: '/icons/flask.svg' },
    { value: 'webpack', name: 'Webpack', image: '/icons/webpack.svg' },
    { value: 'vite', name: 'Vite', image: '/icons/vite.svg' },
  ],
  styling: [
    {
      value: 'styled-components',
      name: 'Styled Components',
      image: '/icons/styled-components.svg',
    },
    { value: 'sass', name: 'Sass', image: '/icons/sass.svg' },
    { value: 'bootstrap', name: 'Bootstrap', image: '/icons/bootstrap.png' },
    { value: 'tailwind', name: 'Tailwind', image: '/icons/css.png' },
  ],
  design: [
    {
      value: 'figma',
      name: 'Figma',
      image: '/icons/figma.svg',
    },
    { value: 'sketch', name: 'Sketch', image: '/icons/sketch.svg' },
    { value: 'adobexd', name: 'Adobe Xd', image: '/icons/adobe-xd.svg' },
    {
      value: 'illustrator',
      name: 'Illustrator',
      image: '/icons/illustrator.svg',
    },
    {
      value: 'indesign',
      name: 'InDesign',
      image: '/icons/indesign.svg',
    },
    {
      value: 'photoshop',
      name: 'Photoshop',
      image: '/icons/photoshop.svg',
    },
    {
      value: 'lightroom',
      name: 'Lightroom',
      image: '/icons/lightroom.svg',
    },
  ],
  hosting: [
    {
      value: 'aws',
      name: 'AWS',
      image: '/icons/AWS.svg',
    },
    {
      value: 'firebase',
      name: 'Firebase',
      image: '/icons/firebase.svg',
    },
    { value: 'azure', name: 'Azure', image: '/icons/Azure.svg' },
    { value: 'heroku', name: 'Heroku', image: '/icons/heroku.png' },
    {
      value: 'wordpress',
      name: 'WordPress',
      image: '/icons/wordpress.svg',
    },
  ],
  learning: [
    { value: 'graphql', name: 'GraphQL', image: '/icons/graphql.svg' },
    { value: 'flutter', name: 'Flutter', image: '/icons/flutter.svg' },
    { value: 'electron', name: 'Electron', image: '/icons/electron.svg' },
  ],
  learn: [
    { value: 'java', name: 'Java', image: '/icons/java.svg' },
    { value: 'kotlin', name: 'Kotlin', image: '/icons/kotlin.svg' },
    { value: 'go', name: 'Go', image: '/icons/Go.svg' },
    { value: 'csharp', name: 'C#', image: '/icons/csharp.svg' },
    { value: 'ruby', name: 'Ruby', image: '/icons/Ruby.svg' },
    { value: 'php', name: 'PHP', image: '/icons/php.svg' },
    { value: '.net', name: '.NET', image: '/icons/net.svg' },
    { value: 'd3', name: 'D3', image: '/icons/d3.svg' },
  ],
  languages: [
    { value: 'spanish', name: 'Spanish', image: '/icons/spanish.svg' },
    {
      value: 'italian',
      name: 'Italian',
      image: '/icons/italian.svg',
      width: 60,
    },
    {
      value: 'portuguese',
      name: 'Portuguese',
      image: '/icons/portuguese.svg',
    },
  ],
};

export default skills;
