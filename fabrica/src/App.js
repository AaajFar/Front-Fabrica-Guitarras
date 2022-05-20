import './App.css';
import Title from './Components/title.js';
import Subtitle from './Components/subtitle.js';
import tableButton from './Components/tablesbutton.js';

function App() {
    return (
      <div>
      <header>
      <Title/>
      <Subtitle/>
      </header>
      <tableButton title="Clientes"/>
      <tableButton title="Guitarras"/>
      <tableButton title="Materiales"/>
      </div>
    );
}

export default App;