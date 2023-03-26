
import './App.css'
import { useState,useEffect } from 'react';



function Quotes() {
  const [quotes,setQuotes]=useState(''); 
  const getQuotes=()=>{
    fetch('https://type.fit/api/quotes')
    .then(res=>res.json())
    .then((data)=>{
      let randomNum=Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum]);
    });
  };
  useEffect(()=>{
    getQuotes();
  
  },[]);
  return (
    
    <div className='app'>
     <div className='quote'>
     <p>{quotes.text}</p>
     <p>{quotes.author}</p>
     <div className='btncontainer'>
      <button className='btn' onClick={getQuotes}>Get Quotes</button>



     </div>

     </div>
    </div>
  );
}

export default Quotes;
