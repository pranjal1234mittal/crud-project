import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import "./AddStudents.css";
import { useState, useEffect } from "react";
import {db} from "../firebase" ;
import { addDoc, collection } from "firebase/firestore";

const initialState = {
  FirstName: "",
  MiddleName: "",
  LastName: "",
  Class: "",
  Division: "",
  RollNumber: "",
  AddressLine1: "",
  AddressLine2: "",
  Landmark: "",
  City: "",
  Pincode: "",
};

function AddStudents() {
  const [time, setTime] = useState();
  const [dte, setDte] = useState();
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({})

  // const history = useHistory();

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

  const { FirstName,MiddleName,LastName,Class, Division, RollNumber, AddressLine1, AddressLine2,Landmark,City,Pincode} = state;

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!FirstName || !MiddleName || !LastName || !Class || !Division || !RollNumber || !AddressLine1 || !AddressLine2 || !Landmark || !City || !Pincode){
      alert("Please enter necessary field")
     }
     else{
      alert("Students details added successfully")
     }
    }

      

  
  const handleInputField = (e) =>{
   const {name , value} = e.target;
    setState({...state, [name]:value});
  };
   
///firebase
  const postData = async (e) =>{
    e.preventDefault();
    await addDoc(collection(db, "state"), {
      FirstName,
      MiddleName,
          LastName,
          Class,
          Division,
          RollNumber,
          AddressLine1,
          AddressLine2,
          Landmark,
          City,
          Pincode,
    })

    window.location.reload();
  }

  return (
    <>
      <div className="nxt-header">
        <p style={{ paddingLeft: "350px", fontSize: "15px", fontWeight: 600 }}>
          Add Students
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
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="row1">
              <input type="text" id="FirstName" name="FirstName" placeholder="First Name" value={FirstName}  autoComplete ="off" onChange={handleInputField} required style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
              <input type="text" id="MiddleName" name="MiddleName" placeholder="Middle Name" value={MiddleName} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
              <input type="text" id="LastName" name="LastName" placeholder="Last Name" value={LastName} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            </div>
             <div>
              <select id="Class" name="Class" value={Class} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}>
                <option value="">Select Class</option>
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                <option value ="4">4</option>
                <option value ="5">5</option>
                <option value ="6">6</option>
                <option value ="7">7</option>
                <option value ="8">8</option>
                <option value ="9">9</option>
                <option value ="10">10</option>
                <option value ="11">11</option>
                <option value ="11">12</option>
              </select>
              <select id="Division" name="Division" value={Division} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}>
              <option value="">Select Division</option>
                <option value ="A">A</option>
                <option value ="B">B</option>
                <option value ="C">C</option>
                <option value ="D">D</option>
                <option value ="E">E</option>
              </select>
              <input  id="RollNumber" name="RollNumber" maxLength="2" placeholder="Enter Roll Number in Digits"  value={RollNumber} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            </div>
            <div>
              <textarea type="text" id="AddressLine1" name="AddressLine1" placeholder="Address Line 1" value={AddressLine1} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
              <textarea type="text" id="AddressLine2" name="AddressLine2" placeholder="Address Line 2" value={AddressLine2} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            </div>
            <div>
            <input type="text" id="Landmark" name="Landmark" placeholder="Landmark" value={Landmark} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            <input type="text" id="City" name="City" placeholder="City" value={City} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            <input type="number" id="Pincode" name="Pincode" placeholder="Pincode" value={Pincode} onChange={handleInputField} autoComplete ="off" required  style={{marginRight:"6px",boxSizing:"border-box" , width : "32%" , height:"3rem" ,border:"2px solid black"}}/>
            </div>
            <div style={{textAlign : "left",}}>
            <input type="submit" value="Add Students" onClick={postData} style={{backgroundColor:"red", color:"white",cursor:"pointer",borderRadius :"10px", height :"2rem", textAlign:"center", border:"red", padding: "2px 8px"}}></input> 
            
            </div>
          </form>
        </div> 
      </div>
    </>
  );
}

export default AddStudents;
