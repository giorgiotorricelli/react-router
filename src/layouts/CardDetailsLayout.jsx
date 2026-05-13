import { useParams } from "react-router";
import useSingleProdFetch from "../hooks/useSingleProdFetch";

function CardDetailsLayout() {
    const { id } = useParams(); // Prende l'ID dall'URL
    const { product: card, loading, error } = useSingleProdFetch(Number(id));


    if (loading) {
        return <div className="text-center mt-5">Caricamento in corso...</div>;
    }

    if (error) {
        return <div className="text-center mt-5">ERRORE NEL CARICAMENTO <br />{error}</div>;
    }

    if (!card) {
        return <div className="text-center mt-5">Prodotto non disponibile.</div>;
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
        </>
    );
}

export default CardDetailsLayout