import { useState } from "react";

const Home = () => {
    const [blogs, setBlog] = useState([
        {
            id: 1,
            title: "Bienvenu dans mon blog",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dignissimos?",
            author: "Duplex",
            date: "02/05/2000",
        },
        {
            id: 2,
            title: "La nuit des codeurs",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            author: "Tony",
            date: "02/05/2015",
        },
    ]);

    return (
        <div className="home">
            <div className="bloglist">
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <a href="" className="blog-titre">
                            {blog.title}
                        </a>
                        <small className="blog-publication-date">
                            Publier le : {blog.date}
                        </small>
                        <p className="blog-author">
                            Publier par :{blog.author}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
