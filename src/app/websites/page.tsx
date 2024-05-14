import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup, { CardType } from '@/components/CardGroup';
import websites from '@/data/websites';
import { FilterByCategory } from '@/utils/utils';

export const metadata: Metadata = {
  title: 'Philip Wisner - Websites',
};

export default function Websites() {
  const client: CardType[] = FilterByCategory('client', websites);
  const recreated: CardType[] = FilterByCategory('recreated', websites);
  const original: CardType[] = FilterByCategory('original', websites);

  return (
    <div className="container">
      <Header name="Websites" />
      <CardGroup heading={'Clients'} cards={client} />
      <CardGroup heading={'Recreated'} cards={recreated} />
      <CardGroup heading={'Original/Concept'} cards={original} />
    </div>
  );
}
