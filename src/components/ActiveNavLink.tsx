import { NavLink as NavLinkActive } from "react-router-dom";

export const NavLink = ({ to, children, ...props }: { to: string, children: string }) => {
    return(
        <NavLinkActive
            { ...props }
            className={ ({ isActive }) => isActive ? 'is-active' : undefined }
            to={ to }
        >
            { children }
        </NavLinkActive>
    )
}

