import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [data,setData] = useState([]);
  const [pages,setTotalPage] = useState("")

  const getData = async (url) => {
    const token = localStorage.getItem('Token')
    try {
        const res = await axios.get("https://school-backend-saurav01.up.railway.app/teacher/", {
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(res)
        setTotalPage(res.data.totalPages)
        setData(res.data.data);
    } catch (error) {
        console.log(error);
    }
};

useEffect(()=>{
   getData()
},[]);

  return (
    <div style={{textAlign:"center"}}>
      {data?.map((item,i)=>{
        return <>
        <h3>{item.name}</h3>
        <p>{item.age}</p>
        <p>{item.department}</p>
        <p>{item.createrId}</p>
        </>
      })}
    </div>
  )
}

export default Home
