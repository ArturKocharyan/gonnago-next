const useFilteredCities = (groupedCities, inputValue) => {
    return Object.entries(groupedCities).reduce(
        (acc, [letter, cities]) => {
          const filtered = cities.filter((city) =>
            city.alias.toLowerCase().includes(inputValue.toLowerCase())
          );
          if (filtered.length > 0) {
            acc[letter] = filtered;
          }
          return acc;
        },
        {}
    );
}

export default useFilteredCities;