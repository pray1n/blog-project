import { NavLink, useParams, useNavigate } from "react-router-dom";

export default function Blogdetail({blogs}) {
    const {id} = useParams();
    const blog = blogs.filter(b => {return b.id == id;})[0];
    console.log(blog);
    return (
        <section className="preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content_text}</p>
            <img src={blog.picture} />
        </section>
    );
}