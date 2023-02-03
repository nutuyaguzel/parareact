
import React from 'react'
import Basket from './Basket'

function BasketItem({item,product}) {
  return (
<div>
  <li className="basket-item">
{product.title} x {item.amount} </li>

<style jsx>{`
.basket-item{
  padding-bottom:10px;
  font-size:16px;
}
.basket-item span{
  color:#999;
}
`} </style>
</div>
   
  )
}

export default BasketItem