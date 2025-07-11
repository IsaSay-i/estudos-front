import './App.css'
import cidade from './assets/city.jpg'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      <figure>
        <img src="/img1.jpg" alt="ih nao foi :(" />
        <figcaption>Imagem em Public</figcaption>
      </figure>
      <figure>
        <img src={cidade} alt="Cidade" />
        <figcaption>Imagem em Assets</figcaption>
      </figure>
    </>
  )
}

export default App
