import "../public/global.css"
import './App.css'

import Home from "./Home"
import Contact from "./Contact"
import StyleGuide from "./StyleGuide"
import NotFound from "./NotFound"
import Blogs from "./Blogs"

import Nav from "./Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Nav />
      <div id="tip" onMouseMove={(e) => {
        const tip = document.querySelector("#tip");
        tip.style.left=`${e.pageX}px`;
        tip.style.top=`${e.pageY}px`;
      }} style={{
        background: "black",
        height: "20px",
        aspectRatio: "1",
      }}>Tip Text...</div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </Router>
  )
}