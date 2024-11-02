const CartWidget = ({Counter}) => {
 
    return(
 <div className="cartWidgeContainer">
    <img src="./Shopping-cart.png" alt="cart" className="cartIcon"/>
    <p className="cartCounter">{Counter}</p>
  </div>
 )
}

export default CartWidget
