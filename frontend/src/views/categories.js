import { NavLink } from "react-router-dom"; 

export default function Categories({categories}) {
    const li_categories = categories.map((category) => {
        return (
            <li key={category.id}>
            <NavLink className="link" to={category.name}>{category.name}</NavLink>
                <ul className="dropdown" aria-label="submenu">
                    <li><a href="#">Blog 2</a></li>
                </ul>
                
        </li>
        );
    });

    return (<ul>{li_categories}</ul>);
}