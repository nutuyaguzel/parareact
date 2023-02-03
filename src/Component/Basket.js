import React from 'react'
import BasketItem from './BasketItem'

function Basket({basket,resetBasket,total,products}) {
  return (
    <div>
    <div className="basket-container container">
    
    <h3>AlışVeriş Detayları</h3>
    <ul>
    {
        basket.map(item=>(
           <BasketItem  key={item.id} item={item} product={products.find(p=>p.id===item.id)}/>
        ))
    }</ul>
    <div className="total"> 
      Toplam:${total}
    </div>
    <button className="reset"  onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>
    <style jsx>{`

    .basket-container {
      width:1000px;
      padding:20px;
      background:#fff;
      border:1px solid #ddd;

    }

    .basket-container h3{
      font-size:20px;
      margin-bottom:15px;
}
.basket-container .total{
  
  padding-top: 10px;
  margin-top:10px;
  font-size:18px;
  font-weight:bold;
  text-align:right;
  color:grey;
}
.reset{
  background:blue;
  height:40px;
  padding:0 20px;
  font-size:16px;
  font-weight:500;
  cursor:pointer;
  color:#fff;



}


    `} </style>
    </div>
  )
}

export default Basket