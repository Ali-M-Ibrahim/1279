import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Product</h1>
            <p>I am product number: {id}</p>
        </div>
    )
}

export default Product;