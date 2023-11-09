import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
export function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div>Total de productos:  {products.length}</div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.productName}</h3>
          <button onClick={() => dispatch(deleteProduct(product.id))}>
            Delete
          </button>
          <button
            onClick={() => {
              navigate(`/edits/${product.id}`);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}
