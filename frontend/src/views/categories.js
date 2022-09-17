export default function Categories({categories}) {
    const li_categories = categories.map((category) => {
        return (
            <li key={category.id}><a href="#">{category.name}</a>
                <ul className="dropdown" aria-label="submenu">
                    <li className="active"><a href="#">Blog 1</a></li>
                    <li><a href="#">Blog 2</a></li>
                </ul>
            </li>
        );
    });

    return (<ul>{li_categories}</ul>);
}