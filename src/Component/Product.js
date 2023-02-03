import React from 'react'
import {useState} from 'react'
import { moneyFormat } from './helpers'

function Product({product, total,money,basket,setBasket}) {
     
    const basketItem =basket.find(item=>item.id === product.id)

    const addBasket= ()=>{
        const checkBasket = basket.find(item => item.id=== product.id)
        if(checkBasket){
            checkBasket.amount +=1
            setBasket([...basket.filter(item=> item.id !== product.id),checkBasket])

        }
        else{
            setBasket([...basket, {
                id:product.id,
                amount:1
            }])
        }

    }
    const removeBasket= ()=>{

 const currentBasket = basket.find(item => item.id === product.id)

 const basketWithoutCurrent= basket.filter(item => item.id !== product.id)
 console.log(Product)
     
            currentBasket.amount -=1

            if(currentBasket.amount === 0){

            setBasket([...basketWithoutCurrent])

        }
        else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }


  return (
    <>
    <div className="product" >
        <img src={product.image} />
        <h6>{product.title} </h6>
        <div className="price"> $ {moneyFormat(product.price)} </div>
        <div className="actions">
        <button className='buy-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
        <span className="amount">{basketItem && basketItem.amount || 0}  </span>
        <button  className='sell-btn' disabled ={total+ product.price > money } onClick={addBasket}>Satın Al</button>
        
        </div>

        </div>
        
    
        <style jsx>{`
        *{
            box-sizing: border-box;
            padding:0;
            margin:0;
            list-style:none;
            border:0;
            outline:0;


        }

        .product {
            padding:15px;
            background:#fff ;
            border:1px solid #ddd ;
            margin-bottom:20px ;
            width:24%;
        }
        .conteiner {
            width: 1000px;
            margin: 0 auto;
        }

        .products{
            display: flex;
            flex-wrap: wrap;
            justify-content:space-between;
        }
            


            .product img{
                width:100%;
           
            }
            .product h6 {
                font-size:20px;
                margin-bottom: 10px;

            }
            .product .price{
                font-size: 20px;
                color: green;
            }

            .product .actions{

                display:flex;
                aling-items:center;


            }
          .actions button{
            height: 40px;
            padding:0 15px;
            flex:1;
            cursor:pointer;
          }
          .actions .buy-btn {
            background: blue;
            font-size:14px;
            font-weigth:500;
            border-radius:0 4px 4px 0;
            color:#fff;
          }
          .actions .sell-btn {
            background: #ccc;
            font-size:14px;
            font-weigth:500;
            border-radius:4px 0 0 4px;
            color:#333;
          }
          .actions .amount{
            width:50px;
            text-aling: center;
            border:1px solid #ddd;
            height:40px;
            display:flex;
            aling-items:center;
            justfy-content:center,
            font-size:17px;
            font-weight:bold;
            color:#555;
          }
          


        
        `} </style>

     
        </>
  )
}

export default Product