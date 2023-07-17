import {Link} from "react-router-dom"

const Header = () => {
return (
  <header>
    <Link to={'/'}> Fact React Pizza </Link>
    <p>Marco</p>
  </header>
)
}

export default Header;
