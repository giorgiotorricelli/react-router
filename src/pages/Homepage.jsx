import { Link } from "react-router";


function Homepage(){
    return (
        <>
            <h1>Welcome</h1>
            <ul>
                <li>
                    <Link to='/about-us'>About us</Link>
                </li>
            </ul>
        </>
    );
}

export default Homepage