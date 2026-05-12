import { Outlet } from "react-router";


function DefaultLayout(){
    return (
        <>
            <header className="d-flex justify-content-center">
                <h1>HEADER</h1>
            </header>
            <Outlet/>
        </>  
    );
}

export default DefaultLayout