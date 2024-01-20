import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Head";
import Body from "./body"
import Footer from "./Footer"

const myapp= (<div><Header />
<Body />
<Footer /></div>)

const root=ReactDOM.createRoot(document.getElementById("app"))
root.render(myapp)