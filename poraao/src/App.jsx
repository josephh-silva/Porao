import './App.css'
import About from './components/About'
import AboutUs from './components/AboutUs'
import Bran from './components/Bran'
import Brands from './components/Brands'
import Dados from './components/Dados'
import Footer from './components/Footer'
import NavH from './components/NavH'
import Porao from './components/Porao'
import SectionCards from './components/SectionCards'


function App() {


  return (
    <>
       <div className="container-a">
        <NavH/>
       <Porao/>
       <AboutUs/>
       <About/>
       <Dados/>
       <SectionCards/>
       <Brands/>
       <Bran/>
       <Footer/>
       </div>
    </>
  )
}

export default App
