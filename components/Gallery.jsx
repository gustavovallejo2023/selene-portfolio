const images = [
 "/nails/1.jpg",
 "/nails/2.jpg",
 "/nails/3.jpg",
 "/nails/4.jpg",
 "/nails/5.jpg",
 "/nails/6.jpg"
];

export default function Gallery() {

 return(

  <section
   id="galeria"
   className="gallery-section"
  >

   <div className="container">

    <h2>Mis Trabajos</h2>

    <div className="gallery-grid">

      {images.map((img,index)=>(

       <img
        key={index}
        src={img}
        alt=""
       />

      ))}

    </div>

   </div>

  </section>
 );
}