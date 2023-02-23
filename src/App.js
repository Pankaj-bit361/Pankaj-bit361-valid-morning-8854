import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllRouting from './Routing/AllRouting';
import Getdata from './components/Getdata';
import axios from "axios"

function App() {
  return (
   <>
   
  <Navbar/>
  <AllRouting/>
  {/* <Getdata/> */}
   </>
  );
}

export default App;
