import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import useSingleProdFetch from "../hooks/useSingleProdFetch";

function CardDetailsLayout({ numberOfProducts }) {
    let btnClicked = false;
    const navigate = useNavigate();
    const { id } = useParams(); // Prende l'ID dall'URL
    const { product: card, loading, error } = useSingleProdFetch(Number(id));
    console.log(id);
    


    if (loading) {
        return <div className="text-center mt-5">Caricamento in corso...</div>;
    }

    if (error && !btnClicked) {
        return <div className="text-center mt-5">ERRORE NEL CARICAMENTO <br />{error}</div>;
    }

    if (!card) {
        return <div className="text-center mt-5">Prodotto non disponibile.</div>;
    }

        const futureId = Number(id) + 1 > numberOfProducts ? 1 : Number(id) + 1;
        const pasteId = Number(id) - 1 === 0 ? numberOfProducts : Number(id) - 1;
    function idToNavigateHandler(event){
        btnClicked = true
        const target = event.target;
        const targetName = target.name;
        
        targetName === 'next' ? navigate(`/card/${futureId}`) : navigate(`/card/${pasteId}`);
    }



    return (
        <>
            <div className="d-flex mt-2 container gap-4 text-center justify-content-around align-items-center layout-card-wrapper">
                <div className="w-25 text-center">
                    <img src={card.image} alt={card.title} style={{ width: '100%' }} />
                </div>
                <div className="w-50">
                    <h1>{card.title}</h1>
                    <div className="rating-wrapper d-flex justify-content-between">
                        <h5>{`${card.rating.rate}`}&#9733;{`  (${card.rating.count})`}</h5>
                        <p>{card.category.toUpperCase()}</p>
                    </div>
                    <div className="price-wrapper">
                        <h4>{`${card.price}$`}</h4>
                    </div>
                    <div className="description-wrapper">
                        <p>
                            {card.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex container justify-content-around">
                <button className="btn btn-primary" onClick={idToNavigateHandler} name="prev">Previous product</button>
                <button className="btn btn-primary" onClick={idToNavigateHandler} name="next">Next product</button>
            </div>
        </>
    );
}

export default CardDetailsLayout