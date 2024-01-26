import iconCart from "../assets/imagenes/cart4.svg"


const CarWidget = () =>{
    return(
    <button type="button" className="btn btn-warning position-relative">
    <img src={iconCart} alt="Carrito" width={24} />
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        1<span className="visually-hidden"></span>
    </span>
    </button>
    )
}

export default CarWidget;