import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup from '@/components/CardGroup';

export const metadata: Metadata = {
  title: 'Philip Wisner - Websites',
};

export default function Skills() {
  const cards = {
    client: [
      {
        name: 'S2i Group',
        value: 's21',
        image: '/logos/S2i.svg',
        description:
          'Landing page for a technical consulting company made with WordPress.',
        link: 'https://s2igrp.com',
      },
    ],
    recreated: [
      {
        name: 'Google',
        value: 'google',
        image: '/logos/google.svg',
        description: 'This was the first webpage I ever recreated.',
        link: '/websites/google/google.html',
      },
      {
        name: 'IFTTT',
        value: 'IFTTT',
        image: '/logos/ifttt.svg',
        description: 'I loved the colors I decided to recreate their homepage.',
        link: '/websites/IFTTT/index.html',
      },
      {
        name: 'Spotify',
        value: 'spotify',
        image: '/logos/spotify.svg',
        description: 'I recreated this page my third day at Ironhack.',
        link: '/websites/spotify/index.html',
      },
      {
        name: 'Instagram',
        value: 'instagram',
        image: '/logos/instagram.svg',
        description: 'I recreated this page my second day at Ironhack.',
        link: '/websites/instagram/index.html',
      },
      {
        name: 'Neat',
        value: 'neat',
        image: '/logos/neat.svg',
        description:
          'I encountered this page and thought it was a simple modern page.',
        link: '/websites/neat/index.html',
      },
      {
        name: 'Bem',
        value: 'bem',
        image: '/logos/bem.svg',
        description: 'I recreated this page in under a half hour.',
        link: '/websites/bem/index.html',
      },
    ],
    original: [
      {
        name: 'Procuratio',
        value: 'procuratio',
        image: '/logos/Procuratio.svg',
        description: 'Coming Soon',
        link: '',
      },
      {
        name: 'Curo',
        value: 'curo',
        image: '/logos/curo.svg',
        description: 'Design Only',
        link: 'https://www.behance.net/gallery/64234953/Curo',
      },
      {
        name: 'Toobly',
        value: 'toobly',
        image: '/logos/toobly.svg',
        description: 'Design Only',
        link: 'https://www.behance.net/gallery/61419649/Toobly',
      },
      {
        name: 'Kopla',
        value: 'kopla',
        image: '/logos/kopla.svg',
        description: 'Design Only',
        link: 'https://www.behance.net/gallery/60048765/Kopla',
      },
    ],
  };

  return (
    <div className="container">
      <Header name="Websites" />
      <CardGroup heading={'Clients'} cards={cards.client} />
      <CardGroup heading={'Recreated'} cards={cards.recreated} />
      <CardGroup heading={'Original/Concept'} cards={cards.original} />
    </div>
  );
}
