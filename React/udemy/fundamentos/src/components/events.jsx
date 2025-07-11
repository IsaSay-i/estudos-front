const Events = () => {

  let i = 1;
  const handleThisEvent = () => {
    let conteudo = document.querySelector('.botao')
    conteudo.innerText = `Vezes clicado: ${i++}`
  };

  const renderizarAlgo = (x) => {
    if(x) {
      return <h2>Renderizando isso</h2>;
    } else {
      return <h2>Também dá pra renderizar esse false statement</h2>;
    }
  }

  return (
    <>
      <div>
        <button onClick={handleThisEvent} className="botao">Contador</button>
      </div>
      {renderizarAlgo(true)}
      {renderizarAlgo(false)}
      <p>Que top!</p>
    </>
  );
};

export default Events;