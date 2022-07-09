import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="404">
            <h2>OOOoooopppss</h2>
            <p>Cette page n'est pas disponible</p>
            <Link to="/"> Allez à la page d'acceuil</Link>
        </div>
    );
};

export default Error404;
