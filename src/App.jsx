
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='max-w-7xl mx-auto  p-4'>
      <Header></Header>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between">
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default App
