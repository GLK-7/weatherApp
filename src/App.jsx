// React
import { useState, useEffect } from 'react';

// Modules
import axios from 'axios';

// Css
import './App.css';

// Styled Components
import { ClimaContainer, Titulo } from "./AppStyles";

// Components
import Busca from './components/Busca';
import ClimaAtual from './components/ClimaAtual';
import Previsao from './components/Previsao';



function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const ApiKey = import.meta.env.VITE_API_KEY || ""

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric&lang=pt_br`)
      const cidade = response.data.name

      const prevResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${ApiKey}&units=metric&lang=pt_br`

      )
      console.log('Prev: ',prevResponse)

      setCidade(cidade)
      setClima(response.data)
      setPrevisao(
        prevResponse.data.list
          .sort((a, b) => a.dt - b.dt) // Ordena por 'dt' em ordem crescente
          .slice(0, 5) // Pega os primeiros 5 elementos
      );
      
    })
  },[ApiKey])

  const buscarClima = async()=>{
    try{
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ApiKey}&units=metric&lang=pt_br`

      )
      const prevResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${ApiKey}&units=metric&lang=pt_br`

      )
      setClima(weatherResponse.data)
      setPrevisao(prevResponse.data.list.slice(0, 5))
    }catch(e){
      console.log("Erro ao buscar clima: ", e)
    }
    
  }

    

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
  </ClimaContainer>
  );
}

export default App;
