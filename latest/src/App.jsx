import React, { Fragment } from "react"
import Home from "./Components/Home"        
import "./App.css"
import { Routes,Route } from "react-router"
import Login from "./Components/Login"
import CricketMatches from "./Components/cricket"
import T20 from "./Components/t20"


function App() {
  return (
  <Fragment> 
   
     <Routes>
    <Route  path = "/"  element={<Home/>}/>
    <Route path = "/login" element={<Login/>}/>
    <Route path = "/cricket" element={<CricketMatches/>}/>
    <Route path = "/t20" element={<T20/>}/>
   </Routes>
    </Fragment>
  )
}

export default App

