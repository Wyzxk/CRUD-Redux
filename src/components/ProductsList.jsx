import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

export function ProductsList() {
  // Obtaining products from the Redux store
  const products = useSelector((state) => state.products);

  // Obtaining useDispatch and useNavigate in constants
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Rendering the list of products
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">
        Total de productos: {products.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded border border-gray-400 shadow-lg"
          >
            {/* Product name */}
            <h3 className="text-xl font-semibold mb-2">
              {product.productName}
            </h3>

            {/* Product description */}
            <p className="text-gray-600 mb-2">{product.productDescript}</p>

            {/* Product price */}
            <p className="text-green-600 font-semibold mb-4">
              ${product.price}
            </p>

            {/* Buttons for deleting and editing a product */}
            <div className="flex space-x-4">
              {/* Delete button */}
              <button
                onClick={() => dispatch(deleteProduct(product.id))}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

              {/* Edit button */}
              <button
                onClick={() => navigate(`/edits/${product.id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
