
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [totalCredit, setTotalCredit] = useState(0);
  const handleTotalCredit = (course) => {
    const newCredit = totalCredit + course.credit;
    // console.log('total-credit' , course.credit);
    setTotalCredit(newCredit);
  }

  return (
    <div className='max-w-7xl mx-auto  p-4'>
      <Header></Header>
      <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-start justify-between">
        <Courses handleTotalCredit={handleTotalCredit}></Courses>
        <Cart totalCredit={totalCredit}></Cart>
      </div>
    </div>
  )
}

export default App
