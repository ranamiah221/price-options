import './App.css'
// import DaisyUi from './components/DaisyUi/DaisyUi'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <> 
    <NavBar></NavBar>
    {/* <DaisyUi></DaisyUi> */}
      <h1 className='text-4xl font-semibold bg-red-600'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    </>
  )
}

export default App
