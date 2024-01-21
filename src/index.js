import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Head";
import Body from "./components/body"
import Footer from "./components/Footer"

const myapp= (<div><Header />
<Body />
<Footer /></div>)

const root=ReactDOM.createRoot(document.getElementById("app"))
root.render(myapp)