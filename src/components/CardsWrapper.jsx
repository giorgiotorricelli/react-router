import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

function Cards_wrapper({ productList }) {

    return (
        <div className="container">
            <div className="cards-wrapper row">
                {
                productList.map(current => {
                    return <Card singleProduct={current} key={current.id}/>
                })
                }
            </div>
        </div>

    );
}

export default Cards_wrapper