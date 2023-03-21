import React,{useState,useEffect} from "react"
import ProductoJson from './../components/ProductoJson'
//Definicion de clase
function DetallePage(){
    const [productos,setProductos] = useState([])
    console.log('Productos',productos)
    useEffect(
        ()=>{
            fetch("https://jsonfy.com/items")
            .then(res=>res.json())
            .then(data=>{
                console.log("data",data)
                setProductos(data)
            })
        },
        []
    )
        return(
            <div>
               <h1>Productos</h1>
               <h1>{productos.map(producto=><ProductoJson  datos={producto} destacados={true} />)}</h1>
            </div>
            
        )
    }

export default DetallePage;