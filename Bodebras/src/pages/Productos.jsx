import '.././assets/Productos.css'
import Nav from '../componentes/Nav' 
import { Container, Grid,} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import  { useState, useEffect } from 'react';
import { Api } from '../services/api';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import './Registros';

function Productos() {

  // fech voluntarios
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function Voluntarios() {
      try {
        let response = await Api.get('/voluntarios');
        setProductos(response.data.psicologo);
      } catch (error) {
        console.error('Error al cargar los datos de los psicólogos:', error);
      }
    }

    Voluntarios();
  }, []);
  //  agregar productos
  // function AgregarProductos() {
    // const [agregarProductos, setAgregarProductos] = useState([]);
  
    // Resto del código...
  // }
  const totalProductos = productos.length;
 
  
  return (
    <>
    <Nav/>
    <Container maxWidth="lg" className='container-body'> 
      <div className='main'>
      <h1 className="titulo-table">Pedidos</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center"> 
      <Grid item xs={12} md={3}>
        <div className="card">
            <span>0</span>
            <span>colectados</span>
          </div>
          </Grid>
          <Grid item xs={12} md={3}>
          <div className="card">
            <span>0</span>
            <span>En ruta</span>
          </div>
          </Grid>
          <Grid item xs={12} md={3}>
          <div className="card">
            
            <span>2</span>
            <span>Entregados</span>
          </div>
          </Grid>
          <Grid item xs={12} md={3}>
          <div className="card">
            
            <span>{totalProductos}</span>
            <span>Total de pedidos</span>
          </div>
          </Grid>
      
          </Grid>  
      </div>
      <div className='form-container'>
      <button type='submit' className='boton'><AddIcon/> <Link to="/registros" className='link'>Agregar pedidos</Link></button>
      <form className='formulario'>
      <button type='submit' className='boton'><SearchIcon/></button>
      <input type="search" id="search_input" placeholder="Buscar productos..."/>
      </form>
      </div>
     <div className='tabela-container'>
     <h1>Tabla de Productos</h1>
     <table className='tabeladeproductos'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Día de entrega</th>
            <th>Hora</th>
            <th>Contacto</th>
            <th>Email</th>
            <th>Estado/Ciudad</th>
          </tr>
        </thead>
        <tbody>
        {productos.map(productos => (
            <tr key={productos.id}>
              <td>{productos.name}</td>
              <td>{productos.day}</td>
              <td>{productos.hour}</td>
              <td>{productos.phoneNumber}</td>
              <td>{productos.email}</td>
              <td>{productos.state}</td>
              <td><DeleteForeverIcon/></td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
          </Container>
    </>
  
  );
}

export default Productos;
