import { WEATHER_URL, WEATHER_API } from "./constants";

class WeatherService {
  async fetchFiveDayForecast() {
    return new Promise(async (success, fail) => {
      try {
        const resp = await fetch(`${WEATHER_URL}${WEATHER_API}`);
        if (resp.ok) {
          const json = await resp.json();
          const data = json.list
            .filter((day) => day.dt_txt.includes("00:00:00"))
            .map((item) => ({
              temp: item.main.temp,
              dt: item.dt,
              date: item.dt_txt,
              imgId: item.weather[0].id,
              desc: item.weather[0].description,
              feelsLike: item.main.feels_like,
              humidity: item.main.humidity,
              windSpeed: item.wind.speed,
            }));
          success({ resp, data });
        } else {
          fail({ error: "Invalid http request" });
        }
      } catch (err) {
        fail(err);
      }
    });
  }
}

export default WeatherService;
