import { useEffect, useState } from "react"
import arrayProductos from "./Productos/ListaProductos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 1500)
        })
    promesa.then( respuesta => {
        setItem(respuesta)
    })
}, [id])


    return(
        
        <div className="container">
            <div className="row">
                    <ItemDetail item={item} />
            </div>
         </div>
        
    )
}

export default ItemDetailContainer