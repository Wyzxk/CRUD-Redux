import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
export function ProductsForm() {
  const state = useSelector((state) => state.products);
  console.log(state);
  const [form, setForm] = useState({
    id: "",
    productName: "",
    productDescript: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      id: state.length,
      productName: e.target.elements.name.value,
      productDescript: e.target.elements.description.value,
      price: e.target.elements.price.value,
    });
    toast.success("Product created", {
      position: "bottom-right",
      style: {
        background: "#101020",
        color: "white",
      },
    });
  };

  useEffect(() => {
    if (form.id !== "") {
      dispatch(addProduct(form));
      toast.success("Product created", {
        position: "bottom-right",
        style: {
          background: "#101020",
          color: "white",
        },
      });
    }
  }, [form]);

  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="name" placeholder="Product Name" />
      <textarea name="description" placeholder="Product Description"></textarea>
      <input type="number" name="price" placeholder="Price" />
      <button>Save</button>
    </form>
  );
}
