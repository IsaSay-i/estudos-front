import Article from '../../components/Article';
import perfil from '../../assets/perfil.jpeg'

const About = () => {
  return (
    <>
      <Article>
        <h2>Pausa</h2>
        <p>Está bem bonitinho mas acho que por hoje é só (18/07 | 00:27)</p>
        <p>Estava aprendendo React para me familizarizar com a estrutura desses projetos e conseguir implementar as APIs corretamente, preciso aprender mais coisa de typescript dessa vez.</p>
        <p>Será que agora eu conseguir aprender o que eu preciso aprender sobre back-end logo e conseguir um emprego até o final do mês ou na primeira semana de Agosto? 🤔</p>
      </Article>
      <Article imgSrc={perfil}>
        <p>GitHub: <a href="https://github.com/IsaSay-i" target="_blank">IsaSay-i</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/isabelle-sayuri-isa/" target="_blank">https://www.linkedin.com/in/isabelle-sayuri-isa/</a></p>
        <p>Portfólio: <span>COMING SOON</span></p>
      </Article>
    </>
  );
};

export default About;
