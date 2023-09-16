import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/Context/global.context";


export const Favs = () => {

  const { state } = useContext(ContextGlobal)


  return (
    <div className="favs">
      <h2>Mis favoritos</h2>
      <div className="card-grid">
        {
          state.favs.length < 1
            ? <h1> No hay dentistas favoritos aún </h1>
            : state.favs.map(elem => <Card key={elem.id} props={elem} isFav={true}/>)
        }
      </div>
    </div>
  );
};
