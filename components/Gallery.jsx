import Image from "next/image";

const images = Array.from({ length: 18 }, (_, i) => `/nails/${i + 1}.jpg`);

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="gallery-section"
    >
      <div className="container">

        <h2>Mis Trabajos</h2>

        <p className="gallery-subtitle">
          Algunos de los diseños realizados para mis clientas 💅✨
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
            >
              <Image
                src={img}
                alt={`Diseño de uñas ${index + 1}`}
                width={600}
                height={800}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}