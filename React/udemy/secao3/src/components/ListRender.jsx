import {useState} from 'react'

const ListRender = () => {
  const [lista] = useState(["Isabelle", "Elisa", "Alex", "Xavier"])
  const [users, setUsers] = useState([
    {id: 1, name: "Isabelle", age: 18},
    {id: 2, name: "Elisa", age: 22},
    {id: 3, name: "Alex", age: 26},
    {id: 4, name: "Xavier", age: 36},
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber)
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <h2>Renderizador de Lista</h2>
      <ol>
        {lista.map((item, i) => (
         <li key={i}>{item}</li>
        ))}
      </ol>

      <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age}
            </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </>
  )
}
export default ListRender;