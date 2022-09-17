export default function SpecialBlogs({specialblogs}) {
    const li_specialblogs = specialblogs.map((blog) => {
        return (
            <section className="special" key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.content_text.substring(0, 40)} ...</p>
                <a href="#">Read more</a>
            </section>
        );
    });

    return (<>{li_specialblogs}</>);
}