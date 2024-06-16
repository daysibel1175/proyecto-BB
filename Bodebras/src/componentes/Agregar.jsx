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
          Información de Envío
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
            <label htmlFor="precio">Precio:</label>
            <input
              type="text"
              id="precio"
              name="precio"
              placeholder="Ingrese el precio del producto"
              className="tab-input"
            />
          </div>
          <div className="input-label">
            <label htmlFor="medidas">Medidas del producto:</label>
            <input
              type="text"
              id="medidas"
              name="medidas"
              placeholder="Ingrese las medidas del producto"
              className="tab-input"
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
          <input
            type="text"
            name="pago"
            placeholder="Información de pago"
            className="tab-input"
          />
        </div>
      )}

      {activeTab === "contacto" && (
        <div className="tab-content">
          <input
            type="text"
            name="contacto"
            placeholder="Informaciones de contacto"
            className="tab-input"
          />
        </div>
      )}
    </div>
  );
};

export default Agregar;
