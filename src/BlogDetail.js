import React from "react";
import { useParams } from "react-router";
import useRecuperation from "./useRecuperation";
import "./index.css";

const BlogDetail = () => {
    const { id } = useParams();
    const {
        data: blog,
        isLoading,
        error,
    } = useRecuperation("http://localhost:8000/blogs/" + id);

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
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
