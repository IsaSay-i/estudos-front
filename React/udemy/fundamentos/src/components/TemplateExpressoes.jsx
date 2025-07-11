const TemplateExpressions = () => {
  const nome = "Pessoinha";
  const data = {
    idade: 18,
    profissao: "Programadora"
  }

  return (
    <>
      <h1>Boa noite {nome}, hora de jantar.</h1>
      <p>Você atua como: {data.profissao}</p>
      <p>Sua idade: {data.idade}</p>
      <p>Olha, uma conta! 4 + 4 = {4 + 4}</p>
    </>
  );
};

export default TemplateExpressions;