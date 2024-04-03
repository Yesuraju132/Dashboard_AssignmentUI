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
      <div className='sidebar' style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "250px", backgroundColor: "#050440", color: "white" }}>
        <Sidebar/>
      </div>
      <div className='col-9 content' style={{ display: "grid", gridGap: "20px", marginLeft: "280px", padding: "20px",backgroundColor:'#F5F6F8'}}>
<div style={{display:'flex'}}>
<h3 className='d-flex col-6'>Hello Sharukh🙌</h3>
   <div className='col-6 d-flex justify-content-end'>
   <InputText type="text" placeholder="Search" style={{ height:"30px", width:'150px'}} />
   </div>
</div>
    <Maincontent/>
    <Graph/>
    <Producttable/>
</div>

    </div>
  );
}

export default App;
