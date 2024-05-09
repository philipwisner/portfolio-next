interface CountryType {
  name: string;
  id: string;
  emoji: string;
}
interface Props {
  heading: string;
  countries: Array<CountryType>;
}

function CountryGroup(props: Props) {
  return (
    <div className="mb-8">
      <p className="font-bold text-xl mb-2">{props.heading}</p>
      <ul>
        {props.countries.length ? (
          props.countries.map((country) => {
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
