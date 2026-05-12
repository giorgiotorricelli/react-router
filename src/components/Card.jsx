



function Card({ singleProduct }) {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating
    } = singleProduct;

    return (
        <div className="single-card-wrapper d-flex flex-column align-items-center h-100 w-100">
            <div className="img-wrapper text-center">
                <img src={image} alt={title} className="product-img" />
            </div>
            <div className="title-wrapper text-center">
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <div className="rating-wrapper d-flex justify-content-between">
                    <p className="d-inline">{`${rating.rate}`}&#9733;{`  (${rating.count})`}</p>
                    <p>{category.toUpperCase()}</p>
                </div>
                <div className="price-wrapper">
                    <p>{`${price}$`}</p>
                </div>
                <div className="description-wrapper">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Card