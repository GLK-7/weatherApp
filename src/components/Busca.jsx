const Busca = ({cidade, setCidade, buscarClima}) => {
  return (
   <div>
    <input type="text" value={cidade} onChange={(e)=> setCidade(e.target.value)} placeholder="Digite uma cidade..."/>
    <button onClick={buscarClima}>Buscar</button>
   </div>
  );
};

export default Busca;
