import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// Importing the Redux action for editing a product
import { editProduct } from "../features/products/productsSlice";

// Definition of the ProductsEdit component
function ProductsEdit() {
  // Local state for the form
  const [form, setForm] = useState({
    id: "",
    productName: "",
    productDescript: "",
    price: "",
  });

  // Obtaining the navigation function from React Router
  const navigate = useNavigate();

  // Obtaining the dispatch function from Redux
  const dispatch = useDispatch();

  // Obtaining parameters from the URL using React Router
  const params = useParams();

  // Selecting the state from the Redux store
  const state = useSelector((state) => state.products);

  // Effect to load product data if there is an ID in the parameters
  useEffect(() => {
    if (params.id) {
      // Finding the corresponding product in the state and setting the form
      const found = state.find((state) => state.id == params.id);
      setForm(found);
    }
  }, [params.id, state]);

  // Handling changes in the form fields
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handling form submission and dispatching the product edit action
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(form));
    navigate("/");
  };

  // Rendering the product editing form
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-md mx-auto my-8 border p-6 rounded bg-slate-500"
    >
      {/* Input for the product name */}
      <div className="mb-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="border rounded w-full py-2 px-3"
          defaultValue={form.productName}
          onChange={handleInputChange}
        />
      </div>

      {/* Textarea for the product description */}
      <div className="mb-4">
        <textarea
          name="productDescript"
          placeholder="Product Description"
          className="border rounded w-full py-2 px-3"
          defaultValue={form.productDescript}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Input for the product price */}
      <div className="mb-4">
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border rounded w-full py-2 px-3"
          defaultValue={form.price}
          onChange={handleInputChange}
        />
      </div>

      {/* Save button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
    </form>
  );
}

export default ProductsEdit;
