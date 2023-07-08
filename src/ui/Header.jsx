import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="">Home</Link>
      <SearchOrder />
      <p>Marco</p>
    </header>
  );
};

export default Header;
