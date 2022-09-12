import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {
const [veri,setVeri] = useState("");
const [tarih,setTarih] = useState("");

useEffect(()=>{

axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
.then(res=>setVeri(res.data.date[tarih]))
.catch(err=>console.log(err))


},[veri,tarih])


  return (
    <div className="App">
      <div className="container">
      <div className="row">
       <div className="col-md-8 mx-auto mt-4"> 
          <h2 className="text-center text-white display-3">TÜRKİYE COVİD-19 Arama Motoru</h2>
          <input type="text" placeholder="dd/mm/yyyy" className="form-control" onChange={(e)=>setTarih(e.target.value )} />
          <table className="table table-striped text-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Test Sayisi</th>
                    <th scope="col">Hasta Satisi</th>
                    <th scope="col">Vefat Sayisi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-white" scope="row">1</th>
                    <td className="text-white">{veri===undefined ? "Veri Bekleniyor" : veri.totalTests}</td>
                    <td className="text-white">2500</td>
                    <td className="text-white">20</td>
                  </tr>
              
                </tbody>
              </table>

          </div>
        </div>
      </div>
    </div>
  )
}



















// function App() {

// const [veri,setVeri] = useState("");
// const [id,setId] = useState(1);
// useEffect(()=>{

//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(res =>setVeri(res.data[id].title))
// },[veri,id])

//   return (
//     <div className="App">
//     <h1>
//     {veri}

//     </h1>
//     <input type="text" value={id}  onChange={e=>setId(e.target.value)}/>
//     </div>
//   );
// }

export default App;
