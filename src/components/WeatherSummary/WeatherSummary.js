import styles from './WeatherSummary.module.scss';

const WeatherSummary = props => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={props.weather.description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${props.weather.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{props.weather.city}</h2>
        <p>
          <strong>Temp:</strong> {props.weather.temp}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;