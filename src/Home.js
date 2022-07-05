import { useState, useEffect } from "react";
import BlogList from "./BlogList";

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
        {
            id: 3,
            title: "L'histoire du codeur mystérieux",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum a quos, quod ipsam nostrum nobis explicab",
            author: "Tony",
            date: "09/06/2016",
        },
    ]);

    const [name, setName] = useState("Duplex");

    const HandleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs);
    };

    useEffect(() => {
        console.log('use effect a etait appele...');
    });
    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title={"La liste de tous les articles"}
                HandleDelete={HandleDelete}
            />
        </div>
    );
};

export default Home;
