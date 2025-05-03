export interface CountryType {
  continent: string;
  name: string;
  id: string;
  visited: boolean;
  emoji: string;
  territory?: boolean;
  unsafe?: boolean;
}

function CountryGroup({
  heading,
  countries,
  showTerritories = true,
  showingAll = true,
}: {
  heading: string;
  countries: CountryType[];
  showTerritories: boolean;
  showingAll: boolean;
}) {
  const visitedCountries = countries.filter((c) => c.visited);
  const visitedCountriesCount = showTerritories
    ? countries.filter((c) => c.visited)
    : countries.filter((c) => c.visited && !c.territory);
  const countriesList = showingAll
    ? showTerritories
      ? countries
      : countries.filter((c) => !c.territory)
    : showTerritories
      ? visitedCountries
      : visitedCountries.filter((c) => !c.territory);
  return (
    <div className="mb-8">
      <div className="mb-2 flex">
        <p className="font-bold text-2xl mr-2">{heading}</p>
        {showingAll ? (
          <p className="bg-gray-200 pr-2 pl-2 pt-1 pb-1 min-w-8 rounded-3xl text-center text-sm font-thin  text-gray-700 flex justify-center content-middle items-center">
            <span className="font-bold">{visitedCountriesCount.length}</span>/
            {countriesList.length}
          </p>
        ) : (
          <p className="bg-gray-200 pr-2 pl-2 pt-1 pb-1 min-w-8 rounded-3xl text-center text-sm font-thin text-gray-700 flex justify-center content-middle items-center">
            {countriesList.length}
          </p>
        )}
      </div>
      <ul>
        {countriesList.length ? (
          countriesList.map((country) => {
            return (
              <li
                key={country.id}
                className={`py-1 ${country.unsafe ? 'text-red-600' : undefined}`}
                style={
                  showingAll
                    ? {
                        fontWeight: country.visited ? '600' : '300',
                        opacity: country.visited ? 1 : 0.5,
                      }
                    : undefined
                }
              >
                <span className="mr-2">{country.emoji}</span>
                {country.name}
              </li>
            );
          })
        ) : (
          <li className="text-gray-400">None Yet</li>
        )}
      </ul>
    </div>
  );
}

export default CountryGroup;
