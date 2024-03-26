const generateCalendar = () => {
    const calendar = {};

    for (let year = new Date().getFullYear(); year <= 2026; year++) {
        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 1); 
            const monthName = date.toLocaleString('default', { month: 'long' });
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const daysArray = [];
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(year, month, day);
                const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
                daysArray.push({ day, weekday }); 
            }
            if (!calendar[year]) {
                calendar[year] = {};
            }
            calendar[year][monthName] = daysArray;
        }
    }

    return calendar;
};

export default generateCalendar