const ClimaAtual = ({clima}) => {
  return (
    
      <div>
        <h3>{clima.name}</h3>
        <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt="" />
        <p>{clima.main.temp}°C</p>
        <p>{clima.weather[0].description}</p>
      </div>
    
  );
};

export default ClimaAtual;
