import './App.css';
import Title from './Components/Title/title.js';
import Subtitle from './Components/Subtitle/subtitle.js';
import Tablebutton from './Components/Buttons/tablebutton.js';
import Footer from './Components/Footer/footer.js';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
      <>
      <div>
      <header>
      <Title/>
      <Subtitle/>
      </header>
      <br/>
      <div className="tablebuttons">
      <Tablebutton nombre="Proveedores" clase="btn btn-outline-primary btn-lg"/>
      <Tablebutton nombre="Materiales_proveedores" clase="btn btn-outline-primary btn-lg"/>
      <Tablebutton nombre="Materiales" clase="btn btn-outline-success btn-lg"/>
      <Tablebutton nombre="Materiales_guitarras" clase="btn btn-outline-success btn-lg"/>
      <Tablebutton nombre="Guitarras" clase="btn btn-outline-danger btn-lg"/>
      <Tablebutton nombre="Pedidos_detalle" clase="btn btn-outline-dark btn-lg"/>      
      <Tablebutton nombre="Pedidos" clase="btn btn-outline-dark btn-lg"/>
      <Tablebutton nombre="Clientes" clase="btn btn-outline-secondary btn-lg"/>
      <Tablebutton nombre="Direcciones_envio" clase="btn btn-outline-secondary btn-lg"/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      </div>
      </>
    );
}

export default App;