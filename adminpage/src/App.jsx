import { useEffect, useState } from 'react'
import Header from './part/Header'
import Collection from './part/Collection'
import './App.css'
// import axios from 'axios'

import items from './part/data'
import Form from './part/Form'

function App() {
  const [cloth,setcloth]=useState(items);
  
  function addbyadmin(input){
  setcloth([{...input},...cloth]);
  }
  function deleteitem(id){
    setcloth(cloth.filter(cloth=>cloth.id!==id))
  }

// useEffect(()=>{
//   getdata()
// },[])

// const getdata=async()=>{
//   const r=await axios.get("/product")
//   console.log(r)
// }

  return (
   <> 
   <Header></Header>
    <Form additem={addbyadmin}></Form>
    <div className='maincontainer'>
        { cloth.map(cloth=><Collection image={cloth.image} name={cloth.name}price={cloth.price} id={cloth.id} deletetheitems={deleteitem}></Collection>)}
    </div>
   </>
  )
}

export default App
