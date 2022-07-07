import BlogList from "./BlogList";
import React from "react";
import "./index.css";
import useRecuperation from "./useRecuperation";

const Home = () => {
    const {
        data: blogs,
        isLoading,
        error,
    } = useRecuperation("http://localhost:8000/blogs");
    return (
        <div className="home">
            {error && <div className="errMesssage">{error}</div>}
            {isLoading && (
                <div className="loadingMsg">En cours de traitement ... </div>
            )}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title={"La liste de tous les articles"}
                />
            )}
        </div>
    );
};

export default Home;
