import Producttable from './Producttabel';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';
import Graph from './Graph';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import graphbar from './Screenshot 2024-04-03 171020.png'

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
   <div className='d-flex'>
    <Graph/>
    <div
      className="p-4 rounded m-2"
      style={{
        display:'flex',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        width: '30%',
        height: 'auto',
        flexDirection:'column'
      }}
    >
      <p style={{fontStyle:'oblique' , fontWeight:'lighter'}}>Customers that buy the products</p>
      <img src={graphbar} alt='graph' style={{borderRadius:'50%',width:'100%',height:'100%'}}/>
    </div>
   </div>
    <Producttable/>
</div>

    </div>
  );
}

export default App;
