import './App.css';
import React, { useState } from 'react';
import Icerik from './components/icerik';


export const TemaVerisi = React.createContext();

const tema ={
  light:{
color:"black",
backgroundColor:"white"
  },
  dark:{
color:"white",
backgroundColor:"black"
  }
};


function App() {
const [deger,setDeger] = useState(tema.dark);

function Deyistir(){
  if(tema.dark===deger){
     setDeger(tema.light)
  }
  else{
    setDeger(tema.dark)
  }
  console.log(deger);
}
  return (
    <div className="App">
    <button onClick={Deyistir}>{tema.dark===deger ? "white":"dark"}</button>
    <TemaVerisi.Provider value={deger}>
    <Icerik />
    </TemaVerisi.Provider>
    </div>
  );
}

export default App;

