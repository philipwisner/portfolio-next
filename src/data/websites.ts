import { CardType } from '@/components/CardGroup';

const websites: CardType[] = [
  {
    name: 'S2i Group',
    value: 's21',
    image: '/logos/S2i.svg',
    description:
      'Landing page for a technical consulting company made with WordPress.',
    link: 'https://s2igrp.com',
    categories: ['client', 'portfolio'],
  },
  {
    name: 'Google',
    value: 'google',
    image: '/logos/google.svg',
    description: 'This was the first webpage I ever recreated.',
    link: '/websites/google/google.html',
    categories: ['recreated', 'portfolio'],
  },
  {
    name: 'IFTTT',
    value: 'IFTTT',
    image: '/logos/ifttt.svg',
    description: 'I loved the colors I decided to recreate their homepage.',
    link: '/websites/IFTTT/index.html',
    categories: ['recreated', 'portfolio'],
  },
  {
    name: 'Spotify',
    value: 'spotify',
    image: '/logos/spotify.svg',
    description: 'I recreated this page my third day at Ironhack.',
    link: '/websites/spotify/index.html',
    categories: ['recreated', 'portfolio'],
  },
  {
    name: 'Instagram',
    value: 'instagram',
    image: '/logos/instagram.svg',
    description: 'I recreated this page my second day at Ironhack.',
    link: '/websites/instagram/index.html',
    categories: ['recreated'],
  },
  {
    name: 'Neat',
    value: 'neat',
    image: '/logos/neat.svg',
    description:
      'I encountered this page and thought it was a simple modern page.',
    link: '/websites/neat/index.html',
    categories: ['recreated'],
  },
  {
    name: 'Bem',
    value: 'bem',
    image: '/logos/bem.svg',
    description: 'I recreated this page in under a half hour.',
    link: '/websites/bem/index.html',
    categories: ['recreated'],
  },
  {
    name: 'Procuratio',
    value: 'procuratio',
    image: '/logos/Procuratio.svg',
    description: 'Coming Soon',
    link: '',
    categories: ['original'],
  },
  {
    name: 'Curo',
    value: 'curo',
    image: '/logos/curo.svg',
    description: 'Design Only',
    link: 'https://www.behance.net/gallery/64234953/Curo',
    categories: ['original'],
  },
  {
    name: 'Toobly',
    value: 'toobly',
    image: '/logos/toobly.svg',
    description: 'Design Only',
    link: 'https://www.behance.net/gallery/61419649/Toobly',
    categories: ['original'],
  },
  {
    name: 'Kopla',
    value: 'kopla',
    image: '/logos/kopla.svg',
    description: 'Design Only',
    link: 'https://www.behance.net/gallery/60048765/Kopla',
    categories: ['original'],
  },
];

export const learning: CardType[] = [
  {
    name: 'Daily Exercises',
    value: 'exercises',
    image: '/logos/ironhack.png',
    description:
      'Take a look at websites, codes and projects completed daily after the bootcamp.',
    link: '/ironhack/daily-exercises.html',
    categories: ['portfolio'],
  },
  {
    name: 'Pair Programming',
    value: 'pair',
    image: '/logos/ironhack.png',
    description:
      'Check out code from exercises that were done daily in rotating pairs or trios.',
    link: '/ironhack/pair-programming.html',
    categories: ['portfolio'],
  },
  {
    name: 'Daily Blog',
    value: 'blog',
    image: '/logos/ironhack.png',
    description:
      'Read daily posts detailing my thoughts and going over everything I learned each day.',
    link: '/blogs/ironhack.html',
    categories: ['portfolio'],
  },
  {
    name: 'Coding Challenges',
    value: 'exercises',
    image: '/logos/hackerrank.png',
    description: `<a href="https://github.com/philipwisner/10-Days-of-JavaScript" target="_blank" class="inline-link">10 Days of JavaScript</a><br/><a href="https://github.com/philipwisner/30-Days-of-Code-HackerRank" target="_blank" class="inline-link">30 Days of Code</a>`,
    link: '/ironhack/daily-exercises.html',
    categories: ['portfolio'],
  },
];

export default websites;
