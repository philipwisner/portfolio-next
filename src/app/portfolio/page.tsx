import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup from '@/components/CardGroup';

export const metadata: Metadata = {
  title: 'Philip Wisner - Portfolio',
};

export default function Portfolio() {
  const cards = {
    apps: [
      {
        name: 'Surveys',
        value: 'surveys',
        image: '/logos/surveys.svg',
        description:
          'An app for financial advisors to send surveys their clients to fill out.',
        link: 'https://www.figma.com/proto/Saz32uktuodrgq4iTTi9lg/Surveys?page-id=0%3A1&type=design&node-id=2-2649&viewport=2393%2C1483%2C0.16&t=nPPgXSV9kwnu9mVr-1&scaling=min-zoom&starting-point-node-id=2%3A3641&mode=design',
      },
    ],
    design: [
      {
        name: 'Surveys',
        value: 'surveys',
        image: '/logos/surveys.svg',
        description:
          'An app for financial advisors to send surveys their clients to fill out.',
        link: 'https://www.figma.com/proto/Saz32uktuodrgq4iTTi9lg/Surveys?page-id=0%3A1&type=design&node-id=2-2649&viewport=2393%2C1483%2C0.16&t=nPPgXSV9kwnu9mVr-1&scaling=min-zoom&starting-point-node-id=2%3A3641&mode=design',
      },
      {
        name: 'Asset-Map',
        value: 'assetmap',
        image: '/logos/assetmap-block.svg',
        description:
          'Financial visualization app to help provide better financial advice engagement.',
        link: 'https://www.figma.com/proto/mwXJcFhGgyY73OYIKklKGE/Asset-Map?page-id=1266%3A9393&type=design&node-id=1-25920&viewport=5133%2C-9287%2C0.41&t=dz2tucx4J80wIz2A-9&scaling=min-zoom&starting-point-node-id=1%3A25920',
      },
      {
        name: 'Streamy',
        value: 'streamy',
        image: '/logos/Streamy.svg',
        description: 'A simple media streaming prototype similar to Spotify.',
        link: 'https://www.behance.net/gallery/91755021/Streamy',
      },
      {
        name: 'Ask',
        value: 'ask',
        image: '/logos/Ask.svg',
        description: 'An app for moderating texted questions for Q&A sessions.',
        link: 'https://www.behance.net/gallery/91765771/ASK-Q-A-App',
      },
      {
        name: 'VendorReg',
        value: 'vendorreg',
        image: '/logos/VendorReg.svg',
        description:
          'An app for keeping track of vendors, products and contacts.',
        link: 'https://xd.adobe.com/view/06ca6252-2189-4dc6-57b6-cf4362adec60-70fb/',
      },
      {
        name: 'Ambulnz',
        value: 'ambulnz',
        image: '/logos/Ambulnz.svg',
        description: 'A Simple Questionnaire for outpatient dropoff.',
        link: 'https://xd.adobe.com/view/a9488ce1-5188-4e90-418f-07e63276e0a1-df79/',
      },
      {
        name: 'Inventory',
        value: 'inventory',
        image: '/logos/Inventory.svg',
        description:
          'An app for scanning and keeping track of purchased assets.',
        link: 'https://xd.adobe.com/view/dca50301-12a0-42c8-6545-1335b58493bb-aa94/',
      },

      {
        name: 'MLab',
        value: 'mlab',
        image: '/logos/MLab.svg',
        description:
          'A website to demonstrate different implementations of Machine Learning.',
        link: 'https://www.behance.net/gallery/91763401/MLab',
      },
      {
        name: 'Todos',
        value: 'todos',
        image: '/logos/Todos.svg',
        description: 'A minimalist Todo App built for mobile.',
        link: 'https://xd.adobe.com/view/ee12201c-3db6-4953-5863-940d7f8d9222-9823/',
      },
      {
        name: 'Encompass',
        value: 'encompass',
        image: '/logos/encompass.svg',
        description:
          'A web app designed to facilitate the process of mathematical learning.',
        link: 'https://www.behance.net/gallery/75904551/Encompass',
      },
      {
        name: 'Minimo',
        value: 'minimo',
        image: '/logos/minimo.svg',
        description: 'Take a look at my wireframes for my mobile design.',
        link: 'documents/Minimo%20Mobile.pdf',
      },
      {
        name: 'Farm Voyage',
        value: 'farm_voyage',
        image: '/logos/farm%20voyage.svg',
        description: 'Take a look at my prototype for the desktop layout.',
        link: 'https://www.figma.com/proto/cXt9FG20cHbW3SKDexMcG9Eg/Farm-Voyage?scaling=contain&node-id=1%3A2',
      },
    ],
    original: [
      {
        name: 'Procuratio',
        value: 'procuratio',
        image: '/logos/Procuratio.svg',
        description: 'A website concept for a Content Management System.',
        link: '',
      },
      {
        name: 'Curo',
        value: 'curo',
        image: '/logos/curo.svg',
        description: 'A single page concept design for a Password Manager.',
        link: 'https://www.behance.net/gallery/64234953/Curo',
      },
      {
        name: 'Toobly',
        value: 'toobly',
        image: '/logos/toobly.svg',
        description: 'A single page concept design for a Mobile DVR App.',
        link: 'https://www.behance.net/gallery/61419649/Toobly',
      },
      {
        name: 'Kopla',
        value: 'kopla',
        image: '/logos/kopla.svg',
        description:
          'A single page concept design for a Currency Tracking App.',
        link: 'https://www.behance.net/gallery/60048765/Kopla',
      },
    ],
    websites: [
      {
        name: 'S2i Group',
        value: 's21',
        image: '/logos/S2i.svg',
        description:
          'Landing page for a technical consulting company made with WordPress.',
        link: 'https://s2igrp.com',
      },
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
    ],
    learning: [
      {
        name: 'Daily Exercises',
        value: 'exercises',
        image: '/logos/ironhack.png',
        description:
          'Take a look at websites, codes and projects completed daily after the bootcamp.',
        link: '/ironhack/daily-exercises.html',
      },
      {
        name: 'Pair Programming',
        value: 'pair',
        image: '/logos/ironhack.png',
        description:
          'Check out code from exercises that were done daily in rotating pairs or trios.',
        link: '/ironhack/pair-programming.html',
      },
      {
        name: 'Daily Blog',
        value: 'blog',
        image: '/logos/ironhack.png',
        description:
          'Read daily posts detailing my thoughts and going over everything I learned each day.',
        link: '/blogs/ironhack.html',
      },
      {
        name: 'Coding Challenges',
        value: 'exercises',
        image: '/logos/ironhack.png',
        description:
          'Take a look at websites, codes and projects completed daily after the bootcamp.',
        link: '/ironhack/daily-exercises.html',
      },
    ],
  };
  return (
    <div className="container">
      <Header name="Portfolio" />
      <CardGroup heading={'Apps'} cards={cards.apps} />
      <CardGroup heading={'Design'} cards={cards.design} />
      <CardGroup heading={'Websites'} cards={cards.websites} />
      <CardGroup heading={'Learning'} cards={cards.learning} />
    </div>
  );
}
