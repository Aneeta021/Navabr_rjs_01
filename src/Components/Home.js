import React from "react";
import { useState } from "react";
 

const Home = () => {
    const [mode, setMode] = useState("light")
    const onClick=()=>{
        if (mode === "light"){
            setMode("dark")
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }else{
            setMode("light")
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            // document.body.style.backgroundColor = "purple"
        }

    }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
       <h1> Home</h1>
       <button className="border-0 px-4 py-2 rounded mb-3" mode={mode} onClick={onClick}>mode</button>

    </div>

  )
}

export default Home