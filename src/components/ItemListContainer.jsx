const ItemListContainer = ({greeting, texto}) => {
    return(
 <div className="homeContent">
 <h1>{greeting}</h1>
 <p>{texto}</p>
 <img src="./banner.png" alt="banner" className="homeContentimg" />
 </div>
)
}

export default ItemListContainer