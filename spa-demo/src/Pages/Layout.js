import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <React.Fragment>
                <Link to="/" style={{marginRight:100}}>Pageone</Link>
                <Link to="/page_two" style={{marginRight:100}}>Pagetwo</Link>
                <Link to="/page_three" style={{marginRight:100}}>Pagethree</Link>
            <Outlet />  
        </React.Fragment>
    )
}

export default Layout;