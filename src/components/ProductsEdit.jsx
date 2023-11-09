import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function ProductsEdit() {
  const [form, setForm] = useState({
    id: "",
    productName: "",
    productDescript: "",
    price: "",
  });
  const params = useParams();
  const state = useSelector((state) => state.products);
  console.log(state);

  useEffect(() => {
    if (params.id) {
      console.log(state[1].id);
      if (state.length > 2) {
        const found = state.find((state) => state.id === params.id);
        console.log(found);
        console.log(found + "nose");
      }
    }
  }, [params.id]);
  return (
    <div>
      {/* <form>
        <input type="text" name="" id="" defaultValue={stat.id} />
        <textarea defaultValue={stat.productDescript}></textarea>
        <input type="number" defaultValue={stat.price} />
      </form> */}
      <button>save</button>
    </div>
  );
}

export default ProductsEdit;
