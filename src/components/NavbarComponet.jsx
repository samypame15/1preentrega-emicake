import CartWidget from "./CartWidget";

const NavbarComponent = () => {
    
  return (
    <nav className="navContainer">
      <a className="aLink">Emicake Shop</a>
      <a className="aLink">Productos</a>
      <a className="aLink">Contactenos</a>
      <a className="aLink">Ubicacion</a>
      <CartWidget Counter={12} />
    </nav>
  );
};

export default NavbarComponent
