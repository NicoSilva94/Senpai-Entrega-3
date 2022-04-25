import './App.css';

function Header() {
    return (
    <div classname="header-main">
        <a href="/" classname="logo-link" alt="Logo placeholder">Ns Store</a>
        <div classname="search-container">
          <input type="text" placeholder="Search.." />
        </div>
        <nav classname="nav-bar">
          <ul>
            <li><a href="store.html" classname="nav-link">Products</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="cart.html" classname="cart-link">MyCart</a></li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;