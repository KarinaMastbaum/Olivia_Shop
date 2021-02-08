import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>Suscribite</h2>
                <p className="parrafoPromos">Ingresa tu e-mail y recibí las mejores promos</p>

                <form className="formularioPromos">
                    <input type="text" placeholder="E-mail" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Newsletter;