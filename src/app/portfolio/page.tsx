import type { Metadata } from 'next';
import Header from '@/components/Header';
import CardGroup, { CardType } from '@/components/CardGroup';
import { FilterByCategory } from '@/utils/utils';
import websites, { learning } from '@/data/websites';
import designs from '@/data/designs';
import apps from '@/data/apps';

export const metadata: Metadata = {
  title: 'Philip Wisner - Portfolio',
};

export default function Portfolio() {
  const appsList: CardType[] = FilterByCategory('portfolio', apps);
  const websitesList: CardType[] = FilterByCategory('portfolio', websites);
  const designsList: CardType[] = FilterByCategory('portfolio', designs);
  const learningList: CardType[] = FilterByCategory('portfolio', learning);

  return (
    <div className="container">
      <Header name="Portfolio" />
      <CardGroup heading={'Apps'} cards={appsList} seeMore="/apps" />
      <CardGroup heading={'Design'} cards={designsList} seeMore="/design" />
      <CardGroup
        heading={'Websites'}
        cards={websitesList}
        seeMore="/websites"
      />
      <CardGroup heading={'Learning'} cards={learningList} />
    </div>
  );
}
