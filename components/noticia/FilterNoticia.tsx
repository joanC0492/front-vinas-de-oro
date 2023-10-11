import { useEffect, useState } from "react";

interface ICountries {
  country: string;
  count: number; //
  isActive: boolean;
}
interface IProps {
  countries: ICountries[];
  className?: string;
  onFilterChange: (countryActive: string) => void;
  onPageChange: (newPage: number) => void;
}

export const FilterNoticia: React.FC<IProps> = ({
  countries,
  className = "",
  onFilterChange,
  onPageChange,
}) => {
  const [newCountries, setNewCountries] = useState(countries);

  const activeFilter = (index: number) => {
    setNewCountries((prev) => {
      const newArray: ICountries[] = prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isActive: true,
          };
        }
        return {
          ...item,
          isActive: false,
        };
      });
      return newArray;
    });
  };

  useEffect(() => {
    const countryActive: string = newCountries.find(
      (country) => country.isActive === true
    )!.country;
    onFilterChange(countryActive);
    onPageChange(1);
  }, [newCountries]);

  return (
    <div className={className}>
      <ul className="flex | flex-wrap | gap-y-3">
        {newCountries.map(({ country, count, isActive }, index) => (
          <li
            key={index}
            className={`group text-sm border-r last-of-type:border-r-transparent ${
              isActive === true ? "is-active" : ""
            }`}>
            <button
              onClick={() => activeFilter(index)}
              className="group-[.is-active]:text-vinas-brown-2 group-[.is-active]:underline font-bold mx-3">
              {country} ({count})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
