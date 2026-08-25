import './main.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import CyberBackground from './components/CyberBackground.jsx'
function App() {

  return (
    <>
    <CyberBackground />
    <Navbar />
    <div className="relative z-10 flex-grow pt-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
      <Home />
    </div>
    <Footer />
    </>
  )
}

export default App
