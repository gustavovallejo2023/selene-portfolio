export default function Services() {

  const services = [
    "Uñas Esculpidas",
    "Soft Gel",
    "Kapping",
    "Semipermanente"
  ];

  return (

    <section
      id="servicios"
      className="services"
    >

      <div className="container">

        <h2>Servicios</h2>

        <div className="cards">

          {services.map((item,index)=>(
            <div
              key={index}
              className="service-card"
            >
              💅
              <h4>{item}</h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}