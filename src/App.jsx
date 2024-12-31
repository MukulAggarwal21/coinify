import Navbar from './components/Navbar'
import Herosection from './components/herosection'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
     <Herosection/>
    </Router>


  )
}

export default App
