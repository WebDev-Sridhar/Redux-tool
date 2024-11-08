import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, clear } from "../Slices/mathSlice";

const Home = () => {
const dispatch = useDispatch();
const count = useSelector((state)=>state.mathInfo.count)
console.log(count);

  return <div>
    <h1>Home</h1>
    <h3>Count: {count}</h3>
    <button onClick={()=>{dispatch(add(1))}}>+</button>
    <button  onClick={()=>{dispatch(sub(1))}}>-</button>
    <button onClick={()=>{dispatch(clear())}} >Clear</button>
    </div>;
  
};

export default Home;