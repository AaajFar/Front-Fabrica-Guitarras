import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FaGuitar } from "react-icons/fa";

const Title = () => {
    return (
        <p className="fs-1 fw-bold fst-italic text-light bg-dark text-center">Bienvenido al sistema para fábrica de guitarras <FaGuitar/></p>
        );
}

export default Title;