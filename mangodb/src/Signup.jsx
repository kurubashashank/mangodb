import {  useState } from "react"
import axios from 'axios'

function Signup(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const[password,setPassword]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/Signup',{name,email,password})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    return(
        <>
        <div className="signup-container">
            <div className="signup-card">
                <form action="" onSubmit={handleSubmit}>
                     <label htmlFor="name">Enter Your Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="email">Enter Your Mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="password">Create Your Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button>SignUp</button>
                </form>
            </div>
        </div>
        
        </>

    )
}
export default Signup