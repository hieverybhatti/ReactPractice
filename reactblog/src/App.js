import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home"
import MemeGen from './components/MemeGen';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className = "App"> 


    <Router>
      <nav className = "navi-style">
        <Link className="navbuttons" to="/"> Home </Link>
        <Link className="navbuttons" to = "/MemeGenerator"> Meme Generator </Link>
      </nav>
      <Routes >

        
        <Route path ="/" element ={<Home/>} />
        <Route path ="/MemeGenerator" element = {<MemeGen/>} />
        <Route path ="*" element ={<ErrorPage/>} />

      </Routes>
    </Router>
    </div>
  );
}

{/* <div className="App">
      <MemeGen/>
      </div> */}
export default App;
