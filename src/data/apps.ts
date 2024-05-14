import { CardType } from '@/components/CardGroup';

const apps: CardType[] = [
  {
    name: 'Asset-Map',
    value: 'asset-map',
    image: '/logos/assetmap-block.svg',
    logo: '/logos/assetmap.svg',
    screenshot: '/screenshots/asset-map-screenshot.png',
    description:
      'Financial visualization app to help provide better financial advice engagement.',
    details:
      'Transform your financial planning process and client relationships with Asset-Map - the user-friendly mapping software with informative visualizations.',
    link: 'https://app.asset-map.com/ampux/auth',
    tagline: `"The Financial Picture Worth a Thousand Decisions."`,
    categories: ['portfolio'],
    buttons: [
      { text: 'See it Live', link: 'https://app.asset-map.com' },
      { text: 'App Walkthrough', link: 'https://vimeo.com/936032277' },
      {
        text: 'Wireframe',
        link: 'https://www.figma.com/proto/mwXJcFhGgyY73OYIKklKGE/Asset-Map?page-id=1266%3A9393&type=design&node-id=1-25920&viewport=5133%2C-9287%2C0.41&t=dz2tucx4J80wIz2A-9&scaling=min-zoom&starting-point-node-id=1%3A25920',
      },
    ],
  },
  {
    name: 'Surveys',
    value: 'surveys',
    image: '/logos/surveys.svg',
    logo: '/logos/surveys-horizontal.svg',
    screenshot: '/screenshots/surveys-screenshot.png',
    description: '',
    details:
      'This is a simple app built in React that will custom created  surveys that allow financial advisors to gather whatever information they need from their clients. That data can then be mapped to a PDF or visible in Asset-Map.',
    link: 'https://vimeo.com/936032813',
    tagline: `“Make info gathering from your clients fun.”`,
    categories: [],
    buttons: [
      { text: 'Walkthrough', link: 'https://vimeo.com/936032813' },
      {
        text: 'Wireframe',
        link: 'https://www.figma.com/proto/Saz32uktuodrgq4iTTi9lg/Surveys?page-id=0%3A1&type=design&node-id=2-2649&viewport=2393%2C1483%2C0.16&t=nPPgXSV9kwnu9mVr-1&scaling=min-zoom&starting-point-node-id=2%3A3641&mode=design',
      },
    ],
  },
  {
    name: 'MLab',
    value: 'mlab',
    image: '/logos/MLab.svg',
    description:
      'MLab is a demo website to showcase various use cases of Machine Learning.',
    details:
      'This is a simple app built in React that will custom created surveys that allow financial advisors to gather whatever information they need from their clients. That data can then be mapped to a PDF or visible in Asset-Map.',
    tagline: `“Make info gathering from your clients fun.”`,
    link: 'http://prakash.ai',
    categories: ['portfolio'],
  },
  {
    name: 'Streamy',
    value: 'streamy',
    image: '/logos/Streamy.svg',
    description:
      'Streamy is a demso streaming service app made similar to Spotify.',
    link: 'https://philipwisner.github.io/streamy/#/library',
    categories: ['portfolio'],
  },
  {
    name: 'Todos',
    value: 'todos',
    image: '/logos/Todos.svg',
    description: 'A minimalist Todo App built for mobile.',
    link: '',
    categories: ['portfolio'],
  },
  {
    name: 'Encompass',
    value: 'encompass',
    image: '/logos/encompass.svg',
    description:
      'Encompass is a web application designed to facilitate the process of learning.',
    link: 'https://encompass.mathematicalthinking.org/',
    categories: ['portfolio'],
  },
  {
    name: 'Minimo',
    value: 'Minimo',
    image: '/logos/Minimo.svg',
    description: 'A minimalist blogging and thought capturing platform.',
    link: 'https://minimo.herokuapp.com/home',
    categories: ['portfolio'],
  },
  {
    name: 'Farm Voyage',
    value: 'farmvoyage',
    image: '/logos/farm voyage.svg',
    description:
      'Find local farms, vineyards, eco-lodges before you plan your next road trip.',
    link: 'https://farm-voyage.herokuapp.com/',
    categories: ['portfolio'],
  },
  {
    name: 'Drag Quiz',
    value: 'dragquiz',
    image: '/logos/dragquiz.svg',
    description:
      'An online quiz game that tests your knowledge of all things drag queens.',
    link: 'https://philipwisner.github.io/Drag-Quiz/#',
    categories: ['portfolio'],
  },
  {
    name: 'Diti',
    value: 'diti',
    image: '/logos/Diti.svg',
    description: 'A Simple VanillaJS To Do App built from scratch.',
    link: 'https://philipwisner.github.io/Diti',
    categories: ['portfolio'],
  },
];

export default apps;
