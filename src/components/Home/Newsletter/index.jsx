import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>Suscribite!</h2>
                <p>Ingresa tu e-mail y recibí las mejores ofertas</p>

                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Newsletter;