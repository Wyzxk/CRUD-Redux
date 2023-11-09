import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <div>
      <Link to="/">
        <li>list</li>
      </Link>
      <Link to="/form">
        <li>Form</li>
      </Link>
    </div>
  );
}
