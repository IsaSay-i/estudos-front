import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserDetails from './components/UserDetails'

function CheckDriverLicense () {
  const userData = [
    {id: 1, name: "Olivia", age: 16, job: "Waiter"},
    {id: 2, name: "Severino", age: 37, job: "Guard"},
    {id: 3, name: "Sheila", age: 18, job: "Student"}
  ]

  return (
    <>
      <h1>Desafio 4</h1>
      {userData.map((item, i) => (
        <UserDetails key={i}
          name={item.name} age={item.age} job={item.job}
        />
      ))}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckDriverLicense />
  </StrictMode>,
)
