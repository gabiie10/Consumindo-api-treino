import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PromotionCard from './components/Promotion/Card/Card';
function App() {
  const [info,setInfo]=useState([]);

  useEffect(()=>{axios.get('http://localhost:5000/promotions')
  .then((response)=>{
    setInfo(response.data);
    console.log(response.data);
  });
},[]);
  return (
    <div>
      {info.map((info)=>(<div>
          <h1>{info.title}</h1>
          <h2>{info.price}</h2>
          <img src={info.img}></img>
          <a href="https://www.petlove.com.br/">IR PARA SITE</a>
          </div>
      ))}
      
    </div>
  );
}

export default App;
