import React from 'react'
import "./collection.css"


function Collection({price,image,name,id,deletetheitems}) {
  function deletetheitem(){
    deletetheitems(id)
  }  
  
  
  return (
    <div >
      <div className="items" >
            <div  className="type1" style={{backgroundImage:`url(${image})` ,backgroundSize: 'cover' ,backgroundRepeat:'no-repeat' }}>
              <div className='editbutton' onClick={deletetheitem}> X</div>
            </div>
            <h1>{name}</h1>
           
            <div className="maincontant">
                <div className="contant"> MRP:<span>₹{price}</span></div>
                <button type='submit'>Buy Now</button>
            </div> 
         </div>
    </div>
  ) 
}

export default Collection;
