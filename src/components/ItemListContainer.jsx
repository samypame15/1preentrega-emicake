import { Button, ButtonGroup } from "react-bootstrap";

const ItemListContainer = ({ greeting, texto }) => {
  return (
    <div className="homeContent">
      <h1>{greeting}</h1>
      <p>{texto}</p>
      <Button variant="danger">Ver nuestros productos</Button>
      <img src="./banner.png" alt="banner" className="homeContentimg" />
    </div>
  );
};

export default ItemListContainer;
