export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10dab4b614fc7188d124e4b7562e1b09&lang=ru&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
