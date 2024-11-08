import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [state, setState] = useState({
    name:"",
    age: "",
    email:"",
    phone: ""
});

const handleClick = (e)=>{
    const {name, value} = e.target;
    setState( (currInput)=>{
        return{
        ...currInput,
        [name]: value,
        };
    });
 
};
const setValues = (e)=>{
    e.preventDefault();
dispatch(setUsers(state));
navigate("/user");
}


  return <div>
    <h1>Profile</h1>
    <form >
        <label>Name</label><br></br>
    <input name="name" type="text" onChange={handleClick} value={state.name} required/><br></br>
    <label>Age</label><br></br>
    <input name="age" type="number" onChange={handleClick} value={state.age} required/><br></br>
    <label>Email</label><br></br>
    <input name="email" type="text" onChange={handleClick} value={state.email} required/><br></br>
    <label>Phone</label><br></br>
    <input name="phone" type="number" onChange={handleClick} value={state.phone} required/><br></br>
    <button  onClick={setValues}>Submit</button>
    </form>

    </div>;
  
};

export default Profile;