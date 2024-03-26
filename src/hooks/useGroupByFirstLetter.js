const useGroupByFirstLetter = (cities) => {
    const grouped = {};
    cities?.forEach((city) => {
        const firstLetter = city.title.charAt(0).toUpperCase();
        if (grouped[firstLetter]) {
            grouped[firstLetter].push(city);
        } else {
            grouped[firstLetter] = [city];
        }
    });
    return grouped;
};

export default useGroupByFirstLetter