import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [nome] = useState("Algodão")

  return (
    <>
      <h1>Isso será exibido?</h1>
      {x && <p>Foi true, então foi exibido!</p>}
      {!x && <p>Se isso foi mostrado, significa que está false</p>}

      {nome == "Isabelle" ? (
        <p>Olá {nome}</p>
      ) : (
        <p>Você não é a Isabelle, você é {nome}</p>
      )}
    </>
  )
};

export default ConditionalRender;