import React, { useState,useEffect, useRef } from 'react';
import './App.css';
// import Header from './components/Header'


function App() {
  const [renk,setRenk] = useState("blue");
  const renkDegisimi = useRef(null);

   const degis=()=>{
    document.body.style.backgroundColor = renkDegisimi.current.value;
    setRenk(()=>renkDegisimi.current.value)
   }
  return (
    <div className='App'>
<p>Ingilis</p>
<input type="text" ref={renkDegisimi} onChange={degis} />
<p>{renk}</p>
    </div>
  );
}















//  function App() {

// const [timer,setTimer] = useState(5);


// useEffect(()=>{


//   if(timer!==0){
//     const interval = setInterval(()=>{
//       setTimer(timer-1)
//       },1000)


// return ()=>clearInterval(interval);

//   }
   



// },[timer])


//   return (
//     <div className='App'>
//    <div style={{height:"250px",width:"250px",backgroundColor:"blue",borderRadius:"50%",color:"white",fontSize:"60px",margin:"10px auto",lineHeight:"250px"}}>{timer}
//    </div>
//     </div>
//   );
// }


















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


// function App() {
// const [basliq,setBasliq] = useState("React Öğreniyorum");
// const numara = 1902;

//   return (
//     <div className='App'>
//       <Container title={basliq} number={numara}>
//       Men Containram
//       </Container>
//       <button style={{width:"70px",height:"50px"}} onClick={()=>{setBasliq("React props")}}>Deyistir</button>
      
//     </div>
//   );
// }

// function Container (props){
//   return(
//      <div style={{width:"400px",height:"400px",border:"2px solid black",margin:"0px auto"}}>
//      {props.children}
//      <Header  baslik={props.title} />
//      </div>
//   );
// }



export default App;
