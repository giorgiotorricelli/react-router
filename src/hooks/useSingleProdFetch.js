import { useState } from "react";
import { useEffect } from "react";

const storeUrl = 'https://fakestoreapi.com/products';

function useSingleProdFetch(productId){
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
            setLoading(true)
            fetch(`${storeUrl}/${productId}`)
            .then(resp => {
                if (!resp.ok) {
                    console.log(resp);
                    throw new Error('Errore nel caricamento');
                };
                return resp.json();
            })
            .then(json => {
                console.log(json); 
                setProduct(json);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message)
                console.log(`Errore nel download dei dati, ${error}`);
                setLoading(false);
             })
            
          }, [productId]);

    return {product, loading, error};
}

export default useSingleProdFetch;