import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'


export const Producto = ({ dataUnidades, dataProduct, nameProduct }) => {

    const [state, setState] = useState([])
    console.log('state: ', state)
    const handleClick = () => {
        const newProduct = {
            id: dataProduct.id,
            unidades: dataProduct.unidades = dataProduct.unidades + 1,
            precio: dataProduct.precio,
            producto: dataProduct.producto
        }
        setState([...state, newProduct])
    }

    const handleRemove = () => {
        state.pop()
        setState([...state])
    }

    return (
        <div>
            Unidades {
                state.length > 0 ? state.length : 0
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'max-content'
            }}>
                <div>
                    <Button style={{
                        margin: '5px'
                    }} 
                    variant='contained' 
                    onClick={handleClick}>
                        Agregar
                    </Button>

                    <Button style={{
                        margin: '5px'
                    }}
                    variant='contained' 
                    disabled={state.length <= 0} 
                    onClick={() => dataUnidades(state)}>
                        Comprar
                    </Button>

                </div>
                <div style={{
                    display: 'flex'
                }}>
                    {
                        !state.length <= 0 &&
                        <Button style={{
                            margin: '5px'
                        }}
                        variant='contained' 
                        onClick={handleRemove}>
                            Remover
                        </Button>
                    }
                </div>
            </div>
        </div >

    )
}

export default Producto
/*class Producto extends Component{
    constructor(props){
        super(props);
        this.state={
            unidades: '5'
        }
    }
    handleClick = () => {
        this.setState({
            unidades: this.state.unidades - 1
        })
    }
    render(){
        return(
            <div>
                Unidades {
                    this.state.unidades > 0 ? this.state.unidades : 0
                } 
                <button onClick={this.handleClick}>Comprar</button>
            </div>
        )
    }
}

export default Producto;*/