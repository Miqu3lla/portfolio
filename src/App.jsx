import './main.css'
import Navbar from './components/navbar.jsx'
import AppRoutes from './router/router.jsx'
function App() {


  return (
    <>
    <Navbar />
    <div className='m-53'>
      <AppRoutes />
    </div>
    </>
  )
}

export default App
