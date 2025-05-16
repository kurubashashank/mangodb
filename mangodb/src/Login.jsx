import { useState } from "react"

function Login(){
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    function handleSubmit(){
        console.log(email)
        console.log(password)
    }
    return(
        <>
        <div className="login-container">
            <div className="login-card">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter Your Mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Enter Your Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button>Login</button>

                </form>
            </div>
        </div>
        </>
    )
}
export default Login