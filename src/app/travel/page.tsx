'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import countries from '@/data/countries';
import CountryGroup, { CountryType } from '@/components/CountryGroup';
import Map from '@/components/Map';
import { FilterByContinent } from '@/utils/utils';

// export const metadata: Metadata = {
//   title: "Philip Wisner - Travel",
// };

export default function Travel() {
  const countriesOnly: CountryType[] = countries.filter(
    (country) => !country.territory
  );
  const territories: CountryType[] = countries.filter(
    (country) => country.territory
  );
  const visitedCountries: CountryType[] = countriesOnly.filter(
    (c) => c.visited
  );
  const visitedTerritories: CountryType[] = territories.filter(
    (c) => c.visited
  );
  const [showTerritories, setShowTerritories] = useState(true);
  const [showAllCountries, setShowAllCountries] = useState(false);

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
      <Map />
      <p className="text-center mt-8 font-regular text-gray-900 text-3xl mb-1">
        Visited{' '}
        <span className="font-bold text-cobalt-800">
          {visitedCountries?.length}
        </span>{' '}
        {showAllCountries && (
          <span>
            out of{' '}
            <span className="font-bold">{countriesOnly?.length}</span>{' '}
          </span>
        )}
        Countries
      </p>
      {showTerritories && (
        <p className="text-center text-lg font-light">
          <span className="font-bold text-cobalt-800">
            {visitedTerritories?.length}
          </span>{' '}
          out of{' '}
          <span className="font-bold text-gray-900">{territories?.length}</span>{' '}
          territories visited
        </p>
      )}
      <div className="flex items-center justify-center align-middle m-4">
        <div className="flex items-center mr-6">
          <input
            checked={showTerritories}
            id="territories-checkbox"
            onChange={() => setShowTerritories(!showTerritories)}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="territories-checkbox"
            className="ms-2 text-sm font-medium text-gray-600"
          >
            Include Territories*
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="countries-checkbox"
            checked={showAllCountries}
            onChange={() => setShowAllCountries(!showAllCountries)}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="countries-checkbox"
            className="ms-2 text-sm font-medium text-gray-600"
          >
            Show All Countries
          </label>
        </div>
      </div>
      {showAllCountries ? (
        <>
          <div className="columns-4 md:columns-3 lg:columns-4 gap-6  mt-10">
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'Europe'}
                countries={FilterByContinent('Europe', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'North America'}
                countries={FilterByContinent('North America', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'South America'}
                countries={FilterByContinent('South America', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'Asia'}
                countries={FilterByContinent('Asia', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'Oceania'}
                countries={FilterByContinent('Oceania', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <CountryGroup
              heading={'Antarctica'}
              countries={FilterByContinent('Antarctica', countries)}
              showingAll={showAllCountries}
              showTerritories={showTerritories}
            />
            <div className="break-inside-avoid">
              <CountryGroup
                heading={'Africa'}
                countries={FilterByContinent('Africa', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-[5%] justify-center mt-10">
            <div className="w-[20%] min-w-[200px]">
              <CountryGroup
                heading={'Europe'}
                countries={FilterByContinent('Europe', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="w-[20%] min-w-[200px]">
              <CountryGroup
                heading={'North America'}
                countries={FilterByContinent('North America', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="w-[20%] min-w-[200px]">
              <CountryGroup
                heading={'South America'}
                countries={FilterByContinent('South America', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
            <div className="w-[20%] min-w-[200px]">
              <CountryGroup
                heading={'Asia'}
                countries={FilterByContinent('Asia', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
              <CountryGroup
                heading={'Africa'}
                countries={FilterByContinent('Africa', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
              <CountryGroup
                heading={'Oceania'}
                countries={FilterByContinent('Oceania', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
              <CountryGroup
                heading={'Antarctica'}
                countries={FilterByContinent('Antarctica', countries)}
                showingAll={showAllCountries}
                showTerritories={showTerritories}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
