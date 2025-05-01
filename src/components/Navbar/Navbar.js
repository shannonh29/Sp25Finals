import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements"

/**
 * This component renders the navigation bar of the website.
 * It includes 
 * 
 * Each navigation link is wrapped with a NavLink component, which allows for link styling
 * when the user is on the corresponding page. The 'activeStyle' prop is used to apply active link styles
 * 
 * Components used:
 * - Nav: Container for the navigation bar
 * - NavMenu: Container for the list of links
 * - NavLink: Individual navigation links
 */
const Navbar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/CS357" activeStyle>
                        CS 357
                    </NavLink>
                    <NavLink to="/CS361" activeStyle>
                        CS 361
                    </NavLink>
                    <NavLink to="/CS427" activeStyle>
                        CS 427
                    </NavLink>
                    <NavLink to="Schedule" activeStyle>
                        Schedule
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;