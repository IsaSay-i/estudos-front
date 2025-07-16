const Component = ({children, myValue}) => {
    return (
        <section>
            <h2>Título da Seção</h2>
            {children}
            {myValue && <p>O valor é: {myValue}</p>}
        </section>
    );
};

export default Component;