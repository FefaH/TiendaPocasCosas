import { Box, Button, FormGroup, Modal, Table, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import React, { useEffect, useState } from "react";

const ProductosForm = (dataProductos) => {

  //Guardar detalle de cada producto (Continuar logica)

  const [productList, setProductList] = useState([dataProductos.dataProductos])
  console.log('productList: ', productList)
  console.log('dataProductos: ', dataProductos)

  const { unidades } = productList

  const handleRemove = (id) => {
    const newArray = productList.filter(product => product.unidades !== id)
    setProductList(newArray)
  }

  return (
    <Grid container>
      <Table>
        <thead>
          <tr>
            {/*<th>Id</th>*/}
            <th>Product id</th>
            <th>Producto</th>
            <th>Precio por unidad</th>
            <th>Precio total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {
            dataProductos.dataProductos.map((element) => (
              <tr>
                <th>{element.unidades}</th>
                <th>{element.producto}</th>
                <th>{element.precio}</th>
                <th>{element.precio * element.unidades}</th>
                <th>
                  <Button color="primary">
                    Editar
                  </Button>
                  <Button onClick={() => handleRemove(unidades)}>Eliminar</Button>
                </th>
              </tr>
            ))


          }

          {/*data.map((element) => (
            <tr>
              <th>{element.dataProductos.mensaje}</th>
              <th>{element.dataProductos.unidades}</th>
              <th>
                <Button color="primary" onClick={handleEdit()}>
                  Editar
                </Button>
                <Button>Eliminar</Button>
              </th>
            </tr>
          ))*/}
        </tbody>
      </Table>
      <Modal
        open={false}
      >
        <Box>
          <FormGroup>
            <label>Id</label>
            <TextField />
          </FormGroup>
          <FormGroup>
            <label>Producto</label>
            <TextField />
          </FormGroup>
          <FormGroup>
            <label>Precio</label>
            <TextField />
          </FormGroup>
        </Box>
      </Modal>
    </Grid>

  );
};

export default ProductosForm;
