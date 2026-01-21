import './main.css'
import Navbar from './components/Navbar.jsx'
import AppRoutes from './router/router.jsx'
function App() {


  return (
    <>
    <Navbar />
    <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-53'>
      <AppRoutes />
    </div>
    </>
  )
}

export default App
