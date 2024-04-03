import Producttable from './Producttabel';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';
import Graph from './Graph';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


function App() {
  return (
    <div className="App dashboard-container" style={{backgroundColor:'#F5F6F8'}}>
      <div className='sidebar' style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "250px", backgroundColor: "#050440", color: "white" }}>
        <Sidebar/>
      </div>
      <div className='col-9 content' style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "20px", marginLeft: "280px", padding: "20px"}}>
    <h3>Hello Sharukh🙌</h3>
    <InputText type="text" placeholder="Search"  style={{ height:"30px", width:'150px', position:'absolute', top:'1.68em', right:'6em'}} />
    <Maincontent/>
    <Graph/>
    <Producttable/>
</div>

    </div>
  );
}

export default App;
