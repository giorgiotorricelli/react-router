import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import Card from "./Card";

function Cards_wrapper({ productList }) {

    return (
        <div className="container">
            <div className="cards-wrapper row">
                {
                productList.map(current => {
                    return <Link key={current.id} to={`/card/${current.id}`} className="col-3 col-lg-4 text-decoration-none text-dark">
                        <Card singleProduct={current} />
                    </Link>;
                })
                }
            </div>
        </div>

    );
}

export default Cards_wrapper