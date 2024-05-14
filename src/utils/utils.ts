import { CardType } from '@/components/CardGroup';
import { CountryType } from '@/components/CountryGroup';

export const FilterByCategory = (
  category: string,
  list: CardType[]
): CardType[] => {
  return list.filter((c) => c.categories.includes(category));
};

export const FilterByContinent = (
  continent: string,
  countries: CountryType[]
): CountryType[] => {
  return countries.filter((c) => c.continent === continent);
};

// const mapCountries = () => {
//   return countries.map((c) => {
//     const match = emojis.find((e) => e.name === c.name);
//     if (match) {
//       c.emoji = match.emoji;
//     } else {
//       c.emoji = 'FIX';
//     }
//     return c;
//   });
// };

// const test = mapCountries();
// console.log('test', test);
