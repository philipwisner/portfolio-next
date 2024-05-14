import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup, { CardType } from '@/components/CardGroup';
import { designs } from '@/data/designs';

export const metadata: Metadata = {
  title: 'Philip Wisner - Design',
};

const filterByCategory = (category: string): CardType[] => {
  return designs.filter((c) => c.categories.includes(category));
};

export default function Design() {
  const wireframes: CardType[] = filterByCategory('wireframes');
  const original: CardType[] = filterByCategory('original');
  return (
    <div className="container">
      <Header name="Design" />
      <CardGroup heading={'Wireframes'} cards={wireframes} />
      <CardGroup heading={'Concepts'} cards={original} />
    </div>
  );
}
