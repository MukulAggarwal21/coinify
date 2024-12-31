import Navbar from './components/Navbar'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
     
    </Router>


  )
}

export default App
