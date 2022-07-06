import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to={"/"} className="logo">
                    cem-blog
                </Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to={"/"} className="lien">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to={"/ajouter"} className="lien buttonArticle">
                        Creer Article
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
