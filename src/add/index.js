import React,{useState} from 'react';
import axios from 'axios';
const Add=()=>{
    
    const inicial={
        "title":"ganso",
        "price":"40",
      };
      const [value,setValue]=useState(inicial);
    axios.post('http://localhost:5000/promotions',value)
    .then((response)=>{
      setValue(value);
    });
}
export default Add;