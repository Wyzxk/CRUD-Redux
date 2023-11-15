import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      <Link to="/" className="text-black hover:text-yellow-500">
        <li className="list-none">Home</li>
      </Link>
      <Link to="/form" className="text-black hover:text-yellow-500">
        <li className="list-none">Form</li>
      </Link>
    </div>
  );
}
