// Comentario en JavaScript
// Que significa className, en html utilizamos class para definir una clase, en jsx no podemos dado que class es una palabra reservada, por eso es que se nombra como className
// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  // let [variable1, variable2] = ["lUCAS", 12312]
  // Se crea una constante para los estados de react
  // Se crea una constante con dos variables y la funcion de 
  // React lo que hace devuelve un array con dos valores,
  // sin embargo estos valores que devuelve la funcion, 
  // son bastante complejos, 
  // linea1, es la variable y set es una funcion que permite modificar la variable
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });

  }

  return (
    <div className="App">
      {/* Comentario en JSX */}
      <div className="main">
        <h1>GENERADOR DE MEMES</h1>
        <h2>Creado con React.JS</h2>
      </div>
      <br/>
    {/* Select picker de memes */}Selecciona el Meme<br/>

      <select onChange={onChangeImagen} className="select-meme">
      <option value="fire">Fuego</option>
      <option value="futurama">Futurama</option>
      <option value="history">History</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">philosoraptor</option>
      <option value="smart">Smart</option>
      </select> <br/>

      {/* Input text - Primera linea */} 
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /> 
      <br/>
      {/* Input text- Segunda linea */} 
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /> 
      <br/>
      {/* Boton exportar */} 
      <button onClick={onClickExportar}>Exportar</button>

      {/* Div de la imagen */}
      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

      <footer class="footer">
        <div>
          <p>@Hasmalware</p>
          <p>Gracias por tu visita.</p>

        </div>
      
      </footer>

    </div>
  );
}

export default App;
