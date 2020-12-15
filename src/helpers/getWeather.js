
export const getWeather = async (city, country) => {

    try {

        const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&${country}&appid=78faa7a9eb9d15d7f239fc2a7dd9aa57`

        const resp = await fetch(URL_API);

        const data = await resp.json();

        return data;

    } catch (error) {
        console.log('error')
    }

}