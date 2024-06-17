import { useState } from "react";
import "../assets/Agregar.css";

const Agregar = () => {
  const [activeTab, setActiveTab] = useState("detalles"); // Estado para controlar la pestaña activa

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="registro-container">
      <div className="tab-buttons">
        <button
          className={activeTab === "detalles" ? "active" : ""}
          onClick={() => handleTabChange("detalles")}
        >
          Detalles del Producto
        </button>
        <button
          className={activeTab === "envio" ? "active" : ""}
          onClick={() => handleTabChange("envio")}
        >
          Información de Envio
        </button>
        <button
          className={activeTab === "pago" ? "active" : ""}
          onClick={() => handleTabChange("pago")}
        >
          Detalles de Pago
        </button>
        <button
          className={activeTab === "contacto" ? "active" : ""}
          onClick={() => handleTabChange("contacto")}
        >
          Información de Contacto
        </button>
      </div>

      {activeTab === "detalles" && (
        <div className="tab-content">
          <div className="input-label">
            <label htmlFor="nombre">Nombre del producto:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese el nombre del producto"
              className="tab-input"
            />
          </div>

          <div className="input-label">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              id="peso"
              name="peso"
              placeholder="Ingrese el peso del producto"
              className="tab-input"
            />
          </div>
          <div className="input-label">
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              placeholder="Ingrese la categoría del producto"
              className="tab-input"
            />
          </div>

          <div className="input-label">
            <label htmlFor="">Medidas del producto:</label>
            <input
              type="text"
              id="precio"
              name="precio"
              placeholder="AxLxC"
              className="tab-input"
            />
          </div>
          <div className="input-label">
            <label htmlFor="medidas">Material y peso soportado:</label>
            <input
              type="text"
              id="medidas"
              name="medidas"
              placeholder="Ingrese las medidas del producto"
              className="tab-input"
            />
          </div>
          <div className='input-label'>
         <label htmlFor="observaciongeneral">Observacion general:</label>
         <textarea
              name="observaciongeneral"
              cols="6"
              rows="10"
              placeholder="el pedido puede ser entregado a las 8am, el pedido no puede entregarse de noche"
              className="tab-input box"
            />
       </div>
                  </div>
      )}

      {activeTab === "envio" && (
       <div className='tab-content'>
       <div className='input-label'>
         <label htmlFor="referencia">Lugar de referencia:</label>
         <input type="text" id="referencia" name="referencia" placeholder="Ingrese un lugar de referencia" className='tab-input'/>
       </div>
       <div className='input-label'>
         <label htmlFor="barrio">Barrio:</label>
         <input type="text" id="barrio" name="barrio" placeholder="Ingrese el nombre del barrio" className='tab-input'/> 
       </div>
       <div className='input-label'>
         <label htmlFor="calle">Calle:</label>
         <input type="text" id="calle" name="calle" placeholder="Ingrese el nombre de la calle" className='tab-input'/> 
       </div>
       <div className='input-label'>
         <label htmlFor="numero">Número:</label>
         <input type="text" id="numero" name="numero" placeholder="Ingrese el número" className='tab-input'/> 
       </div>
     </div>
     
      )}
      {activeTab === "pago" && (
        <div className="tab-content">
         <div className='input-label'>
          <label htmlFor="metododepago">metodo de Pago:</label>
          <input type="text" id="metodpdepago" name="metododepago" placeholder="efectivo" className='tab-input'/> 
        </div>
        <div className='input-label'>
         <label htmlFor="valordelproducto">Valor del producto:</label>
         <input type="text" id="valordelproducto" name="valordelproducto" placeholder="23$" className='tab-input'/> 
       </div>
        </div>
      )}

      {activeTab === "contacto" && (
        <div className="tab-content">
           <div className='input-label'>
         <label htmlFor="Nombre">Nombre Completo:</label>
         <input type="text" id="nombre" name="nombre" placeholder=" Simon Lopez" className='tab-input'/> 
       </div>
          <div className='input-label'>
         <label htmlFor="telefono">telefono del cliente:</label>
         <input type="text" id="telefono" name="telefono" placeholder="25 16546 5454" className='tab-input'/> 
       </div>
       <div className='input-label'>
         <label htmlFor="documentodeidentidad">Documento de identidad:</label>
         <input type="text" id="documentodeidentidad" name="documentodeidentidad" placeholder="cedula" className='tab-input'/> 
       </div>
       <div className='input-label'>
         <label htmlFor="numerodeidentidad">Numero de identidad:</label>
         <input type="text" id="numerodeidentidad" name="numerodeidentidad" placeholder="554.448.544" className='tab-input'/> 
       </div>
       <div className='input-label'>
         <label htmlFor="observaciondelcliente">Observacion del cliente:</label>
         <textarea
              name="observaciondelcliente"
              cols="6"
              rows="10"
              placeholder="el pedido puede ser entregado a familiares, hermana, johanna lopez, 12.488.561; padre jose lopez, 12.486.135"
              className="tab-input box"
            />
       </div>
        </div>
        
      )}

    </div>
  );
};

export default Agregar;
