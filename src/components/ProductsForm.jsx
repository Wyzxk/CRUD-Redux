import { useSelector, useState, useDispatch } from "react";
import { addProduct, editProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export function ProductsForm() {
  // Obtaining state from our Redux store
  const state = useSelector((state) => state.products);

  // Obtaining useNavigate in a constant
  const navigate = useNavigate();

  // Obtaining useDispatch in a constant
  const dispatch = useDispatch();

  // Local state for the form
  const [form, setForm] = useState({
    id: "",
    productName: "",
    productDescript: "",
    price: "",
  });

  // Function to handle form submission and save the data in local state form
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      // Generating a unique id using uuid
      id: uuid(),
      productName: e.target.elements.name.value,
      productDescript: e.target.elements.description.value,
      price: e.target.elements.price.value,
    });
  };

  // If form.id exists, execute dispatch to update the store state with form local state
  useEffect(() => {
    if (form.id !== "") {
      dispatch(addProduct(form));
      navigate("/");
    }
  }, [form]);

  // Rendering the product form
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-md mx-auto my-8 border p-6 rounded bg-slate-500"
    >
      {/* Input for the product name */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border rounded w-full py-2 px-3"
        />
      </div>

      {/* Textarea for the product description */}
      <div className="mb-4">
        <textarea
          name="description"
          placeholder="Product Description"
          className="border rounded w-full py-2 px-3"
        ></textarea>
      </div>

      {/* Input for the product price */}
      <div className="mb-4">
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border rounded w-full py-2 px-3"
        />
      </div>

      {/* Save button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
    </form>
  );
}
