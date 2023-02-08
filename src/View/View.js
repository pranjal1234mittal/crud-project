
import React from 'react'

function View() {
  return (
    <div>View</div>
  )
}

export default View;
// import React from 'react';
// import { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { addDoc, collection, getDocs } from "firebase/firestore";
// import {Link} from "react-router-dom";
// import {useParams} from "react-router-dom";

// function View() {
//     const[user,setUser] = useState({});
    // const {id} = useParams();

//     const fetchPost = async () => {
//         const response = db.collection("state")
//         const data=await response.get();
//         data.docs.forEach(item=>{
//          setUser([...user,item.data()])
//         })
//       };
    

//    useEffect(()=>{
//      fetchPost();
//    },[])



//   return (
    <>
            {/* {data?.map((todo, i) => (
            <p key={i}>{todo.data}</p>
          ))} */}
          {/* {
        user && user.map((u)=>{
          return(
            <div className="blog-container">
              <h4>{u.FirstName}</h4>
              <p>{u.Class}</p>
            </div>
          )
        })
      } */}
    </>
//   )
// }

// export default View;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const View = () => {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     webiste: ""
//   });
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(http://localhost:3003/users/${id});
//     setUser(res.data);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link>
//       <h1 className="display-4">User Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">name: {user.FirstName}</li>
//         {/* <li className="list-group-item">user name: {user.username}</li>
//         <li className="list-group-item">email: {user.email}</li>
//         <li className="list-group-item">phone: {user.phone}</li>
//         <li className="list-group-item">website: {user.website}</li> */}
//       </ul>
//     </div>
//   );
// };

// export default View;