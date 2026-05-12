import Cards_wrapper from "../components/CardsWrapper";

function Products({ productList }){
    return (
        <>
            <h1>Products</h1>
            <Cards_wrapper productList={productList}/>
        </>
    );
}

export default Products