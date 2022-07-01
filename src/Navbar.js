import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a className="logo" href="www.google.com">
                    cem-blog
                </a>
            </div>
            <ul className="liens">
                <li>
                    <a href="www.google.com" className="lien">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="www.google.com" className="lien buttonArticle">
                        Creer Article
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
