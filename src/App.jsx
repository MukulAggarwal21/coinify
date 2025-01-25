import Navbar from './components/Navbar'
import Herosection from './components/herosection'
import Allcoins from './components/allcoins'
import Footer from './components/footer'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
     <Herosection/>
     <Allcoins/>
     <Footer/>
    </Router>


  )
}

export default App
