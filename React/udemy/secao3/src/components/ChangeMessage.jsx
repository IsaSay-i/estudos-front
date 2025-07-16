const ChangeMessage = ({ handleMessage }) => {
  const mensagens = ["Oioi", "Bom dia, boa tarde ou boa noite", "Olá", "Eae?"]
  return (
    <>
      <button onClick={() => handleMessage(mensagens[0])}>1</button>
      <button onClick={() => handleMessage(mensagens[1])}>2</button>
      <button onClick={() => handleMessage(mensagens[2])}>3</button>
      <button onClick={() => handleMessage(mensagens[3])}>4</button>
    </>
  );
};

export default ChangeMessage;