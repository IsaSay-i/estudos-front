import "../styles/components/Article.css";

const Article = ({ imgSrc, children }) => {
  return (
    <article className="Article">
      {imgSrc && <img src={imgSrc} alt="imagem" />}
      <section className="Article-content">
        {children}
      </section>
    </article>
  );
};

export default Article;
