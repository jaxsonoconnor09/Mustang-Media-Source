import "../public/global.css"
import './App.css'

import Home from "./Home/Home"
import Contact from "./Contact/Contact"
import StyleGuide from "./StyleGuide/StyleGuide"
import NotFound from "./NotFound/NotFound"
import Blogs from "./Blogs/Blogs"
import Documentation from "./Documentation/Documentation"
import Auth from "./Auth/Auth"

import Nav from "./Nav/Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/website-editor-auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}