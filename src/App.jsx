import Navbar from './components/Navbar'
import Herosection from './components/herosection'
import Allcoins from './components/allcoins'
import Footer from './components/footer'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './components/News'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';



function Home() {
  return (
    <>
      <Herosection />
      <Allcoins />
      <Footer />
    </>
  );
}

function App() {

  return (
    <Router>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/News" element={<News/>} />
     </Routes>
    </Router>


  )
}

export default App
