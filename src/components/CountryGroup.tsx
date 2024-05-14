export interface CountryType {
  continent: string;
  name: string;
  id: string;
  visited: boolean;
  emoji: string;
}

function CountryGroup({
  heading,
  countries,
}: {
  heading: string;
  countries: CountryType[];
}) {
  return (
    <div className="mb-8">
      <p className="font-bold text-xl mb-2">{heading}</p>
      <ul>
        {countries.length ? (
          countries.map((country) => {
            return (
              <li key={country.id} className="py-1">
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
