import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Home = () => {
    const [empl, setData] = useState([]);
    const fetchDetails=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                console.log(response.data)
                setData(response.data) 
            }
        );
    }
    React.useEffect(()=>{fetchDetails()},[])
  return (
    <div><Navbar />
     <div className="container">
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">  
     <div className="row g-3">
        <h2>Dashboard</h2>
     <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    
    </tr>
  </thead>
  <tbody>
  {empl.map((item, index) => {
    return <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
   })}
  </tbody>
</table>
        </div>
     </div>
     </div>
    
    </div>

  )
}

export default Home