import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Add from './add';
import Del from './delete';
function App() {
 
  const [info,setInfo]=useState([]);
  const [search,setSearch]=useState('');
  useEffect(()=>{
    const params={};
    if(search){
      params.title_like=search;
    }//O BIXO DE PESQUISA
    axios.get('http://localhost:5000/promotions',{params})
  .then((response)=>{
    setInfo(response.data);
    console.log(response.data);
    <Add/>
  });
 
},[search]);




  return (
    <div>
      <input type="search"
      value={search}///O BIXO DO INPUT
      onChange={(ev)=>setSearch(ev.target.value)}/>
     {info.map((info)=>(
       <div className='card'>
       <h1>{info.title}</h1>
       </div>
     ))}
    
     
    </div>
  );
}


export default App;
