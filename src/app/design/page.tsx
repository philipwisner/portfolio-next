import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup, { CardType } from '@/components/CardGroup';
import designs from '@/data/designs';
import { FilterByCategory } from '@/utils/utils';

export const metadata: Metadata = {
  title: 'Philip Wisner - Design',
};

export default function Design() {
  const wireframes: CardType[] = FilterByCategory('wireframe', designs);
  const original: CardType[] = FilterByCategory('original', designs);
  return (
    <div className="container">
      <Header name="Design" />
      <CardGroup heading={'Wireframes'} cards={wireframes} />
      <CardGroup heading={'Concepts'} cards={original} />
    </div>
  );
}
