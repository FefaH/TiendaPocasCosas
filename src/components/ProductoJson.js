import React,{useEffect} from "react"
function ProductoJson(props){
    const {datos} = props
    const {name,price} = datos
    
    return(
        <div>
            <div> {name}</div>
            <div> {price}</div>
        </div>
    )
}
export default ProductoJson