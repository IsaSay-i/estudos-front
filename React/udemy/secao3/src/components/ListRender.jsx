import {useState} from 'react'

const ListRender = () => {
  const [lista] = useState(["Isabelle", "Elisa", "Alex", "Xavier"])
  const [users] = useState([
    {id: 1, name: "Isabelle", age: 18},
    {id: 2356475, name: "Elisa", age: 22},
    {id: 14, name: "Alex", age: 26},
    {id: 87, name:"Xavier", age: 36},
  ])

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
    </>
  )
}
export default ListRender;