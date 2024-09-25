const Previsao = ({previsoes}) => {
  return (
    <>
      <h4>Previsão para as próximas horas</h4>
      <ul>
      {previsoes.map((previsao)=>(
             <li previsao={previsao.dt}>
              <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} alt="" />
              <p>{previsao.main.temp}°C</p>
              <p>{previsao.weather[0].description}</p>
            </li>
            ))} 
      </ul>
    </>
  );
};

export default Previsao;
