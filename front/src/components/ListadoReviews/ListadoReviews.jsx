import React  from "react";
import CardReview from "../CardReview/CardReview";
import reviews from "../../data/reviews.json";



export default function ListadoReviews({}) {
  const { id_carreras } = useParams;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "var(--colorUno)",
          margin: "30px 0",
        }}
      >
        {id_carreras.nombre }
      </h1>
      <h2 style={{ fontSize: "2rem", color: "var(--colorUno)" }}>Carrera</h2>
      
      {reviews.map((review, idx) => (
        <CardReview key={idx} review={review} />
      ))}
    </div>
  );
}
