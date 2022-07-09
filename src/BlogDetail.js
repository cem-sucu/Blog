import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useRecuperation from "./useRecuperation";
import "./index.css";

const BlogDetail = () => {
    const { id } = useParams();
    const {
        data: blog,
        isLoading,
        error,
    } = useRecuperation("http://localhost:8000/blogs/" + id);
    const history = useHistory;

    const HandleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            methode: "DELETE",
        }).then(() => {});
        history.push("/");
    };

    return (
        <div className="detail-blog">
            {isLoading && (
                <div className="loadingMsg">En cours de traitement ..</div>
            )}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre">{blog.title}</h2>
                    <small className="blog-publication-date">{`Publier le : ${blog.date}`}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">{`Publier par : ${blog.author}`}</p>
                    <button className="delete" onClick={HandleDelete}>
                        supprimer
                    </button>
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
