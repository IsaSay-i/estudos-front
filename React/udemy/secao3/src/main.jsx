import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ManageData from './components/ManageData.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import ShowUserName from './components/ShowUserName.jsx';
import CarDetails from './components/CarDetails.jsx';
import Component from './components/Component.jsx';
import ExecuteFunction from './components/ExecuteFunction.jsx';
import Message from './components/Message.jsx';
import ChangeMessage from './components/ChangeMessage.jsx';

function Correcao() {
  const name = "Daiane";
  const [userName] = useState("Joana");

  return (
    <>
      <ShowUserName name={userName} />
    </>
  )
}

function OutroCointainerAiai() {
  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color:"amarelo", newCar: true},
    { id: 2, brand: "Ferrari", km: 0, color: "amarelo", newCar: true },
    { id: 3, brand: "Chevrolet", km: 35000, color: "preto", newCar: false  },
    { id: 4, brand: "Volkswagen", km: 22000, color: "branco", newCar: false  },
    { id: 5, brand: "Toyota", km: 120000, color: "prata", newCar: false  },
  ]

  return (
    <>
      {cars.map((car, i) => (
        <CarDetails key={i}
          brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}
        />
      ))}
    </>
  )
}

function showMessage() {
  window.alert("Evento do componente-pai!")
}

function MessageContainer() {
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <>
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ManageData />
    <ListRender />
    <ConditionalRender />
    <Correcao />
    <CarDetails brand="Fusca" km={10005} color="azul" />
    <CarDetails brand="March" km={90075} color="azul" newCar />
    <OutroCointainerAiai />
    <Component>
      <p>Esse é o filho do componente!</p>
    </Component>
    <Component myValue={13}>
      <p>Hmm, value aparecerá em baixo eu acho, essa é minha aposta!</p>
    </Component>
    <ExecuteFunction myFunction={showMessage} />
    <MessageContainer />
  </StrictMode>,
)
