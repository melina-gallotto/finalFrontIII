import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./Context/global.context";


const Card = ({ props, isFav = false }) => {

  const { theme, addFav, removeFav } = useContext(ContextGlobal)

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="/images/doctor.jpg" alt="" className="doctorImg"/>
      <h3>{props.name}</h3>
      <h4>{props.username}</h4>
      <p> Dentista {props.id}</p>
      
      <Link to={"/dentist/" + props.id} style={{ marginBottom: 10, color: "#30A2FF" }}> +Información </Link>

      {
        !isFav
          ? <button
            onClick={() => addFav(props)}
            className="favButton"
          >
            ⭐
          </button>

          : <button
            className="deleteBtn"
            style={{color: theme.font}}
            onClick={() => removeFav(props.id)}
          >
            Eliminar
          </button>
      }

    </div>
  );
};

export default Card;
