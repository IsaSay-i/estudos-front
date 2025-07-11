const Desafio = () => {

  function enviar(){
    const resp = document.getElementById('resp');
    let a = Number.parseFloat(document.querySelectorAll("input")[0].value);
    let b = Number.parseFloat(document.querySelectorAll("input")[1].value);

    resp.innerHTML = a + b;
  };

  return (
    <>
      <div className="quadro">
        <h2>Somando Número</h2>
        <input type="number" name="" id="" /> + 
        <input type="number" name="" id="" /> =
        <span id="resp"></span>
        <button onClick={enviar}>Enviar</button>
      </div>
    </>
  );
};

export default Desafio;