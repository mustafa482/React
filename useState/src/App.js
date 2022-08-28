import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'

// function App() {
//   const [deger,setDeger] = useState(0);
//   function Azalt(){
//   setDeger(deger-1);
//   }
//   return (
//    <div className='App'>
//      <p><button onClick={()=>{setDeger(deger+1)}}>Artir</button></p>
//      <p>{deger}</p>
//      <p><button onClick={Azalt}>Azalt</button></p>
//    </div>
//   );
// }


function App() {
const [basliq,setBasliq] = useState("React Öğreniyorum");
const numara = 1902;

  return (
    <div className='App'>
      <Container title={basliq} number={numara}>
      Men Containram
      </Container>
      <button style={{width:"70px",height:"50px"}} onClick={()=>{setBasliq("React props")}}>Deyistir</button>
      
    </div>
  );
}

function Container (props){
  return(
     <div style={{width:"400px",height:"400px",border:"2px solid black",margin:"0px auto"}}>
     {props.children}
     <Header  baslik={props.title} />
     </div>
  );
}



export default App;
