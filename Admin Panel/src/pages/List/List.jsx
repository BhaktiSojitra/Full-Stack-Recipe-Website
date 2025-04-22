import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {
  
  const [list,setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () =>{
    const response = await axios.get(`${url}/api/recipe/list`);
    //console.log(response.data);
    //console.log(response.data.success);
    if(response.data.success){
      //console.log("response.data.data = " + response.data.data);
      setList(response.data.data)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[]);

  const removeFood = async(recipeid) =>{
    //console.log(recipeid);
    const response = await axios.delete(`${url}/api/recipe/remove/${recipeid}`);

    /* delete from the database after that we have to update the UI with new data 
    so once we have removed this first one (first recipe) that will be removed from the
    database after that again we have to fetch this data and display new data */

    await fetchList();

    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }

  return (
    <div className='list add flex-col'>
      <p>All Recipes</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Id</b>
          <b>Image</b>
          <b>Title</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <p>{item.id}</p>
              <img src={item.image} alt=''/>
              <p>{item.title}</p>
              <button onClick={() => {
                navigate("/update/" + item.title)
              }}>Update</button>
              <p className='trash-icon' onClick={()=>removeFood(item.id)}><i class="fa-solid fa-trash"></i></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
