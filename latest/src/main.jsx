import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./state/store.js"
AOS.init()

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>

    <Provider store={store}>
    <App />
      
    </Provider>
    </BrowserRouter>
)

