import {useState} from "react";

const ManageData = () => {
  let someData = 10;
  console.log(someData);
  const [number, setNumber] = useState(15);

  function mudar(){
    setNumber(number + 1)
  }

  return (
    <>
      <div>
        <p>Valor: {someData} não mudará por não ser um hook e sim uma variavel</p>
        <button onClick={mudar}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor: {number} muda por usar hook (useState)</p>
      </div>
    </>
  )
}

export default ManageData;