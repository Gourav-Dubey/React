import React, { Fragment } from "react"
import Home from "./Components/Home"        
import "./App.css"
import { Routes,Route } from "react-router"
import Login from "./Components/Login"
import CricketMatches from "./Components/cricket"
import T20 from "./Components/t20"
import AboutUs from "./Components/AboutUs"
import News from "./Components/News"


function App() {
  return (
  <Fragment> 
   
     <Routes>
    <Route  path = "/"  element={<Home/>}/>
    <Route path = "/login" element={<Login/>}/>
    <Route path = "/cricket" element={<CricketMatches/>}/>
    <Route path = "/t20" element={<T20/>}/>
    <Route path ="/AboutUs" element={<AboutUs/>}/>
    <Route path = "/News" element={<News/>}/>
   </Routes>
    </Fragment>
  )
}

export default App

