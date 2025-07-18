import MonkeSpin from "../../assets/monke.gif";
import "./style.css";
import Article from '../../components/Article';

const Home = () => {
  return (
    <>
      <div className="hero">
        <figure>
          <img src="./react.svg" alt="React logo" />
          <figcaption>
            <h1>
              Aprendendo React <span>na marra</span>
            </h1>
            <p>Entendendo o front para implementar o back</p>
          </figcaption>
        </figure>
      </div>

      <Article imgSrc={MonkeSpin}>
        <h2>Teste</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, velit id distinctio voluptatibus, animi harum neque accusantium aperiam adipisci amet dolore maiores fuga consectetur soluta laborum excepturi, quidem ipsa suscipit!</p>
        <ul>
          <li>Lista 1</li>
          <li>Lista 2</li>
          <li>Lista 3</li>
          <li>Lista 4</li>
        </ul>
      </Article>

      <Article>
        <h2>Sem imagem</h2>
        <p>Esse article não tem imagem, mas possui uma lista</p>
        <ul>
          <li>Lista 1</li>
          <li>Lista 2</li>
          <li>Lista 3</li>
          <li>Lista 4</li>
        </ul>
      </Article>

      <Article>
        <h2>Sem imagem</h2>
        <p>Esse article não tem imagem, mas possui uma lista</p>
        <ul>
          <li>Lista 1</li>
          <li>Lista 2</li>
          <li>Lista 3</li>
          <li>Lista 4</li>
        </ul>
      </Article>

    </>
  );
};

export default Home;
