import './App.css'
import About from './components/About'
import AboutUs from './components/AboutUs'
import Brands from './components/Brands'
import Cards from './components/Cards'
import CardsServices from './components/CardsServices'
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
       <Footer/>
       </div>
    </>
  )
}

export default App
