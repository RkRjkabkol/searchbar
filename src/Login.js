import React, {useState} from "react";

import "./Login.css"

function Login(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    
    return(
        
        <div  style={{ 
            backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dlogin%2Bbackground&psig=AOvVaw04TWTOLS_0hAzCm7YPRNUp&ust=1637397653565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDw8N6DpPQCFQAAAAAdAAAAABAD")` 
          }}>
     <h1 style={{fontStyle: "Bernard MT Condensed",color: "White",letterSpacing:"1px",paddingLeft:"400px",fontSize:"40px"}}>Welcome to the Food Court.  </h1>
        <div  className="login" >

            <form className="login_form" >
                <h1 className="text">Login Here     
                <div className="img">    
               <img  src={'Images/login.png'} alt="Login" style={{maxWidth:270,maxHeight:270,paddingLeft:"15.0rem",}}/> </div>
               </h1> 
                <input type="name" placeholder="Name"value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            
             <button className="submit_btn" onClick={()=>alert("LoggedIn succesfully")}>Submit</button>
            </form>
        </div>
        </div>
        

    );
};
export default Login;