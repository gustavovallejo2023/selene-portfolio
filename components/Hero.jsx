export default function Hero() {
  return (
    <section className="hero">

      <div className="container text-center">

        <img
          src="/profile.jpg"
          alt="Selene"
          className="profile"
        />

        <h1>Selene Vallejo</h1>

        <h3>Nail Artist 💅</h3>

        <p>
          Diseños únicos para resaltar tu estilo.
        </p>

        <div className="buttons">

          <a
            href="https://wa.me/5491127359207"
            className="btn btn-success"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/brillo_de_lunna"
            className="btn btn-dark"
          >
            Instagram
          </a>

        </div>

      </div>

    </section>
  );
}