import React ,{useState}from 'react'
import "./Join.css"
import logo from "../../image/applogo.png"
import {Link} from "react-router-dom"
let user;
const Join = () => {
const [name, setname] = useState("");

 const sendUser=()=>{
   user=document.getElementById('joinInput').value;
   document.getElementById('joinInput').value="";

 }
  return (
    <div className='joinPage'>
      <div className='joinContainer'>
      <img src={logo} alt="logo"/>
      <h1>Chats</h1>
      <input onChange={(e)=>setname(e.target.value)} placeholder='Enter your name' type="text" id="joinInput"/>
     <Link onClick={(e)=>!name?e.preventDefault():null} to="/chat"> <button onClick={sendUser}className='joinbtn'>Login</button></Link>
      </div>
    </div>
  )
}

export default Join
export {user}