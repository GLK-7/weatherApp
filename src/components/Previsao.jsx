import React from "react";
import { PrevisaoContainer } from "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {

  const dataHora = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours(); // Pega a hora
    return `${hours}h`; // Retorna a hora no formato "14h"
  };
  

  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li key={index}>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            {dataHora(previsao.dt)} <span>{Math.round(previsao.main.temp)}°C </span>{previsao.weather[0].description}
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;