import { useState } from "react";
import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [ item , setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find ( item=>item.id===parseInt(id) );
                resolve(producto);
            }, 1000);
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [id]);

    return (
        <ItemDetail item={item}  />
    )
}

export default ItemDetailContainer;