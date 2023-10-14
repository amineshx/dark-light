import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './index.css'

export default function App() {
  const [mode,setMode]=React.useState(false)
  function toggle(){
    setMode(prevState => {
      return(
        !prevState
      )
    });
  }
    return (
        <div className="container">
            <Navbar 
              darkMode={mode}
              toggleDarkMode={toggle}
            />
            <Main 
              darkMode={mode}
              toggleDarkMode={toggle}
            />
        </div>
    )
}