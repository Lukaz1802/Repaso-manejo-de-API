import React, {useEffect, useState} from "react";


//////////////////////////////////////////////////////////////////

//uso de fetch
fetch('url')
.then(res => res.json())
.then(data => {
  console.log(data)
})


//uso de async await
const obtenerDatos = async() => {
try {
  const res = await fetch ('url')
  const data = await res.json()
  console.log(data)
}catch (error) {
  console.log(error)
  }
}
obtenerDatos()


////////////////////////////////////////////////////////////////

function App() {

const [equipo, setEquipo] = useState([])

useEffect(() => {
  obtenerDatos()
  
}, [])

const obtenerDatos = async () => {
 const data = await fetch('https://jsonplaceholder.typicode.com/users')
 const users = await data.json()
//  console.log(users)
setEquipo(users)
}

  return (
    <div className="App">
        <h1>Listando datos de API</h1>

        <ul>
          {
            equipo.map(item => (
              <li key={item.id}>{item.name} - {item.email}</li>
            ))
          }
          </ul>      
    </div>
  );
}

export default App;
