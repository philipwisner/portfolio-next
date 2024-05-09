'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import { countries } from '@/data/countries';
import Script from 'next/script';
import CountryGroup from '@/components/CountryGroup';

// export const metadata: Metadata = {
//   title: "Philip Wisner - Travel",
// };

const filterByContinent = (continent: string) => {
  return countries.filter((c) => c.continent === continent && c.visited);
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

export default function Travel() {
  const northAmerica = filterByContinent('North America');
  const southAmerica = filterByContinent('South America');
  const europe = filterByContinent('Europe');
  const africa = filterByContinent('Africa');
  const asia = filterByContinent('Asia');
  const oceania = filterByContinent('Oceania');

  const visitedCountries = countries.filter((c) => c.visited);
  const subtractCountries = 3;
  const visitedCountriesCount = visitedCountries.length;
  const countriesCount = visitedCountriesCount - subtractCountries;

  useEffect(() => {
    document.title = `Philip Wisner - Travel`;
  }, []);

  // useEffect(() => {
  //   console.log('page loaded');
  //   setTimeout(() => {
  //     const map = AmCharts.makeChart('mapdiv', {
  //       type: 'map',
  //       theme: 'dark',
  //       projection: 'mercator',
  //       panEventsEnabled: true,
  //       backgroundColor: '#FFFFFF',
  //       backgroundAlpha: 1,
  //       zoomControl: {
  //         zoomControlEnabled: true,
  //       },
  //       dataProvider: {
  //         map: 'worldHigh',
  //         getAreasFromMap: true,
  //         areas: [
  //           {
  //             id: 'AL',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'AT',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BA',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BE',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BG',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'HR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CZ',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'FR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'DE',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'DO',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'HU',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'IE',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'IT',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'XK',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'MK',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'ME',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'VA',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'PT',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'RS',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'SK',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'SI',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'ES',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'TR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GB',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BS',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BZ',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CA',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'SV',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GT',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'HN',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'MX',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'NI',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'PA',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'PR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'US',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'AR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BO',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CL',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CO',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'EC',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GY',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'PY',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'PE',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'SR',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'UY',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'MA',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CN',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'JP',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'TH',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'TT',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'VI',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GI',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'AG',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BB',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'AN',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'DM',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'GD',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'KN',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'LC',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'TC',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'CW',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'BQ',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'VI',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'LU',
  //             showAsSelected: true,
  //           },
  //           {
  //             id: 'NL',
  //             showAsSelected: true,
  //           },
  //         ],
  //       },
  //       areasSettings: {
  //         autoZoom: true,
  //         color: '#D1D1D1',
  //         colorSolid: '#1845AD',
  //         selectedColor: '#1845AD',
  //         outlineColor: '#FFFFFF',
  //         rollOverColor: '#1845AD',
  //         rollOverOutlineColor: '#FFFFFF',
  //       },
  //     });
  //   }, 1);
  // }, []);

  return (
    <div className="container">
      <Header name="Travel" />
      <Script
        src="https://www.amcharts.com/lib/3/ammap.js"
        type="text/javascript"
      ></Script>
      <Script
        src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"
        type="text/javascript"
      ></Script>
      <Script
        src="https://www.amcharts.com/lib/3/themes/dark.js"
        type="text/javascript"
      ></Script>
      <div id="mapdiv" className="w-full h-[450px]"></div>
      <h3 className="text-center mt-8">
        <span className="font-bold text-cobalt-800">{countriesCount}</span>{' '}
        countries visited so far
      </h3>
      <div className="flex gap-[5%] justify-center mt-10">
        <div className="w-[20%] min-w-[200px]">
          <CountryGroup heading={'North America'} countries={northAmerica} />
        </div>
        <div className="w-[20%] min-w-[200px]">
          <CountryGroup heading={'Europe'} countries={europe} />
        </div>
        <div className="w-[20%] min-w-[200px]">
          <CountryGroup heading={'South America'} countries={southAmerica} />
        </div>
        <div className="w-[20%] min-w-[200px]">
          <CountryGroup heading={'Asia'} countries={asia} />
          <CountryGroup heading={'Africa'} countries={africa} />
          <CountryGroup heading={'Oceania'} countries={oceania} />
        </div>
      </div>
    </div>
  );
}
