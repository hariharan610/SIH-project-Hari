import React from 'react'
import {useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';

function Modal2({open,onclose,decayPercent,rotArea,children}) {
  const [humidity,sethumidity]=useState();
  const [tempc,settempc]=useState();
  const [tempf,settempf]=useState();
  const [gassensor,setgassensor]=useState();
  const [pirsensor,setpirsensor]=useState();
  const [flamesensor,setflamesensor]=useState();
  const [ultrasonic,setultrasonic]=useState();

  async function getdata(){  
    const response = await axios.get('http://localhost:5000/excelcell');
    const temp = response.data;
    sethumidity(temp.humiditydata);
   settempc(temp.tempcdata);
    settempf(temp.tempfdata);
    setgassensor(temp.gassensordata);
    setpirsensor(temp.pirsensordata);
    setflamesensor(temp.flamesensordata);
    setultrasonic(temp.ultrasonicdata);

  }
  getdata()
  return (
    <div>
    <div onClick={onclose} className={`fixed inset-0 justify-center items-center transition-colors ${open ? "visible bg-black/20":"invisible"} `}>
    <div onClick={(e)=>e.stopPropagation()} className={`  h-{64}  absolute inset-0 bg-white rounded-xl shadow p-8 transition-all   text-5xl ${open ? "scale-50 opacity-100":"scale-125-opacity-0"}`}  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        
        <div><h1>{humidity} </h1></div> <br/> 
        <div><h1>{tempc} </h1>  </div><br/> 
        <div><h1>{tempf} </h1></div><br/>   
        <div><h1>{gassensor} </h1> </div>       <br/>  
        <div><h1>{pirsensor} </h1> </div>  <br/>       
        <div><h1>{flamesensor} </h1></div>    <br/>    
        <div><h1>{ultrasonic} </h1></div>  <br/>    
        <div><h1>Percentage of Decay: {decayPercent} </h1></div>  <br/>   
        <div><h1>Number of Rotten Areas: {rotArea} </h1></div>  <br/>       

        <button onClick={onclose} type="button" class="absolute top-0 right-0 h-16 w-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-5xl">X</button>

    </div>

    </div>
    </div>
  )
}

export default Modal2