const UserDetails = ({name, age, job}) => {
  return (
    <>
      <ul>
        <li>Nome: <strong>{name}</strong></li>
        <li>Idade: {age}</li>
        <li>Profissão: {job}</li>

        { age < 18 ? (
            <li>Não pode dirigir</li>)
        : age == 18 ? (
            <li>Na idade mínima para poder tirar carteira</li>
        ) : (
            <li>Pode tirar carteira</li>
        )}
      </ul>
    </>
  );
};

export default UserDetails