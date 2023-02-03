import React from 'react'
import { moneyFormat } from './helpers';

function Header({ total,money}) {
  return (
    <>
    <div>
      { total > 0 && (
        
    <div className='header'>
 Harcayacak  {moneyFormat(money-total)} $ paranız kaldı!
    </div>
       

        

      ) ||
      (
        <div className='header'>
        Harcayacak  {moneyFormat(money)} $ paranız var 

        </div>
      )}
      <style jsx> {`

      
      .header{
        position: sticky;

        top:0;
        background:linear-gradient(to bottom,green,greenyellow);
        height:60px;
        display:flex;
        aling-items:center;
        justify-content:center;
        color:#fff;
        font-size:24px;
        letter-spacing:1px

      }
      .header span{

      }
      
      
      
      `} </style>

       
    </div>
    </>
  )
}

export default Header;

