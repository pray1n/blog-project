export default function Blogs({blogs}) {
    const li_blogs = blogs.map((blog) => {
        return (
            <section className="preview" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.content_text}</p>
                <a href="#">Read more</a>
            </section>
        );
    });

    return (<>{li_blogs}</>);
}