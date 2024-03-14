
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

export const grandTotalCredit = 15;

function App() {
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTitle, setCartTitle] = useState([]);
  const [remaining, setRemaining] = useState(15);
  const [carts, setCarts] = useState([]);




  const handleTotal = (course) => {

    // don't display duplicate card info in the cart section....

    // check if the card is already exist in the cart section....
    const alreadyExists = carts.find(e => e.id === course.id);
    if (!alreadyExists) {
      // total cards in cart section
      setCarts(cart => [...cart, course]);

      const { credit, price, name } = course;

      const newCredit = totalCredit + credit;
      const newRemaining = remaining - credit;
      
      
      // check if the condition is true...
      if (newCredit > grandTotalCredit && newRemaining < 0) {
        return alert(`only ${grandTotalCredit} is allowed.`);
        
      }
      else {
        // total credit counter
        const newCredit = totalCredit + credit;
        setTotalCredit(newCredit);

        // credit hour remaining counter
        const newRemaining = remaining - credit;
        setRemaining(newRemaining);
      }


      // total price counter
      const newPrice = totalPrice + price;
      setTotalPrice(newPrice);

      // course name counter
      const newCartTitle = [...cartTitle, name];
      setCartTitle(newCartTitle);


    }

  }

  return (
    <div className='max-w-7xl mx-auto  p-4'>
      <Header></Header>
      <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-start justify-between">
        <Courses handleTotal={handleTotal}></Courses>
        <Cart carts={carts} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice} cartTitle={cartTitle}></Cart>
      </div>
    </div>
    
  )
}

export default App
