export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7b8ed3a9886e99243732a7831f85971&lang=ru&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}