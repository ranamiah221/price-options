import './App.css'
import Charts from './components/Charts/Charts'
// import DaisyUi from './components/DaisyUi/DaisyUi'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <> 
    <NavBar></NavBar>
    {/* <DaisyUi></DaisyUi> */}
      <h1 className='text-4xl font-semibold bg-red-600'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    <Charts></Charts>
    <Phones></Phones>
    </>
  )
}

export default App
