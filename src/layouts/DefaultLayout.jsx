import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


function DefaultLayout() {
    return (
        <>
            <header className="d-flex flex-column align-items-center my-header">
                <h1>FAKE</h1>
                <ul className="navbar d-flex gap-3">
                    <li>
                        <NavLink to='/about-us'>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>Home</NavLink>
                    </li>
                </ul>
            </header>
            <Outlet />
        </>
    );
}

export default DefaultLayout