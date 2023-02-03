
import './App.css';
import {useState,useEffect} from 'react'
import  Header from './Component/header'
import products from './products.json'
import Product from './Component/Product';
import Basket from './Component/Basket';

function App() {
  const [money,setMoney ]= useState(100000000)
  const [basket,setBasket]=useState([])
  const [total,setTotal]=useState(0)

const resetBasket=()=>{
    setBasket([])
}

  useEffect(()=>{
    setTotal(
      basket.reduce((acc,item)=>{
        return acc +(item.amount * (products.find(product=> product.id === item.id).price))
  
      },0)
    )

    
 
 

  } , [basket])

 
  return (
    <div className="App">
    <Header total={total} money={money}/>
  <div className="conteiner products">
  {products.map(product =>(
      <Product  key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}
      
      />

    ))

    }
  
    
    {total>0 && (
      <Basket  resetBasket={resetBasket} products={products}  total={total} basket={basket} />
    )}
    </div>
    </div>
  );
}

export default App;
