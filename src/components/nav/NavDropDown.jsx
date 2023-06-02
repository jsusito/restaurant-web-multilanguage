
export function NavDropDown(props){
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle btn-logger" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.children}
            </ul>
        </li>
    )
}