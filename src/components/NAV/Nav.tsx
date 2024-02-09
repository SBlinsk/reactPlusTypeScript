import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">Stany Project</span>
      <span>
        <Link to="/" className="mr-2 hover:text-black">
          Products
        </Link>
        <Link to="/about" className="hover:text-black">About</Link>
      </span>
    </nav>
  );
}
