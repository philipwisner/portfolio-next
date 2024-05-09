import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup from '@/components/CardGroup';
import websites from '@/data/websites';

export const metadata: Metadata = {
  title: 'Philip Wisner - Websites',
};

export default function Skills() {
  return (
    <div className="container">
      <Header name="Websites" />
      <CardGroup heading={'Clients'} cards={websites.client} />
      <CardGroup heading={'Recreated'} cards={websites.recreated} />
      <CardGroup heading={'Original/Concept'} cards={websites.original} />
    </div>
  );
}
