import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return ( <div className="card text-center">
    <div className="card-header">
      Creado por: Ariel Farbiarz
    </div>
    <div className="card-body">
      <h5 className="card-title">Proyecto Fabrica de Guitarras</h5>
      <p className="card-text">Te invito a que puedas ver mi perfil de Linkedin en el siguiente link:</p>
      <a href="https://www.linkedin.com/in/ariel-jonathan-farbiarz/" className="btn btn-primary">Linkedin</a>
    </div>
    <div className="card-footer text-muted">
      Muchas gracias por tu tiempo
    </div>
  </div>
    );
}

export default Footer;