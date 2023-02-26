import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllRouting from './Routing/AllRouting';
import Getdata from './components/Getdata';
import axios from "axios"
import Alert1 from './components/Alert1';



function App() {
  return (
   <>
   
  <Navbar/>
  <AllRouting/>
  {/* <Getdata/> */}
  {/* <Alert1/> */}
   </>
  );
}

export default App;
