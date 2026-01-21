import './main.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
function App() {


  return (
    <>
    <Navbar />
    <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-53'>
      <Home />
    </div>
    </>
  )
}

export default App
