import "./App.css";
import { ProductsForm } from "./components/ProductsForm";
import { ProductsList } from "./components/ProductsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import ProductsEdit from "./components/ProductsEdit";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<ProductsList />} path="/"></Route>
        <Route element={<ProductsForm />} path="/form"></Route>
        <Route element={<ProductsEdit />} path="/edits/:id"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
