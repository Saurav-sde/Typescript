
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import type { Chai } from './types'
import { ChaiList } from './components/ChaiList'
import { OrderForm } from './components/OrderForm'


const menu: Chai[] = [
  {id: 1, name: "Masala", price: 30},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 15}
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name={"Saurav"} isSpecial={true} price={30}/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order) => {
          console.log("Placed: ", order.name, order.cups);
        }}/>
      </div>
    </>
  )
}

export default App
