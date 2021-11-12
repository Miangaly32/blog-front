import {Link} from "react-router-dom";

const Menu = ({classname}) =>  {

    return (
        <>
            <Link
                variant="body2"
                to="/"
                className={classname}
            >
                Accueil
            </Link>
            <Link
                variant="body2"
                to="/articles"
                className={classname}
            >
                Articles
            </Link>
            <Link
                variant="body2"
                to="/contact"
                className={classname}
            >
                Contact
            </Link>
        </>
    );
}

export default Menu;