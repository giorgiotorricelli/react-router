import { useState } from "react";
import { useEffect } from "react";

const storeUrl = 'https://fakestoreapi.com/products';

function useFetchProducts(){
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch(storeUrl)
        .then(resp => resp.json())
        .then(json => setProductList(json))
        .catch(error => `Errore nel download dei dati, ${error}`)
        
      }, []);

      return productList;
}

export default useFetchProducts