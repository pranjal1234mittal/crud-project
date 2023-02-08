import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import "./ManageStudents.css";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {Link} from "react-router-dom";


function ManageStudents() {
  const [time, setTime] = useState();
  const [dte, setDte] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const myInterval = setInterval(() =>
      setTime(new Date().toLocaleTimeString(), 1000)
    );
  }, []);

  useEffect(() => {
    const myInterval = setInterval(() =>
      setDte(new Date().toLocaleDateString(), 1000)
    );
  }, []);

  const fetchPost = async () => {
    await getDocs(collection(db, "state")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
      console.log(data, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  },[]);

  const deleteItems = (id) =>{

  }

  return (
    <>
      <div className="nxt-header">
        <p style={{ paddingLeft: "350px", fontSize: "15px", fontWeight: 600 }}>
          Manage Students
        </p>
        <p
          style={{
            paddingRight: "200px",
            fontSize: "15px",
            fontWeight: 500,
            float: "left",
          }}
        >
          <span>{dte}</span> {time}
        </p>
      </div>
      <div className="student-flex">
        <div>
          <LandingPage />
        </div>
        <div className="list">
        {/* const gotData = {data?.map((todo, i) => (
            <p key={i}>{todo.data}</p>
          ))}
          <p>{gotData.Class}</p> */}
           <table style={{border:"2px solid black"}}>
            <thead>
           <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Roll_Number</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
           
              
              {data?.map((todo, id) => {
                return(
                <tr key={id} >
              <td>{todo.FirstName}</td>
              <td>{todo.Class}</td>
              <td>{todo.RollNumber}</td>
              <td><Link to={`/Veiw/${id}`}><button>Veiw</button></Link></td>
              <td><Link><button>Edit</button></Link></td>
              <td><button>Delete</button></td>
              {/* onClick={()=>deleteItems(id)} */}
              </tr>
                )})}
              
              </tbody>
              
            </table>
          

          {/* <table>
            <th>Name</th>
            <th>Class</th>
            <th>Roll_Number</th>
            <td>{gotData.FirstName}</td>
          </table> */}
          
        </div>
      </div>
    </>
  );
}

export default ManageStudents;
