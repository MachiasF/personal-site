import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <div className="projects-container">
        <Thumbnail 
            link="/gmetrix-student"
            image="https://www.gmetrix.net/Images/GMetrixLogo.png"
            title="GMetrix Student: Online learning platform with thousands of courses"
            year="2016-Present"
            category="GMetrix"
            techstack="C#, .Net Webforms, Sql, Azure, React, Less, ADA"
        />
        <Thumbnail 
            link="/gmetrix-Unity"
            image="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg"
            title="Unity Webgl: Office Simulations built with Unity engine."
            year="2016-Present"
            category="GMetrix"
            techstack="C#, Javascript, Unity, WebGL, WebAssembly, Localization"
        />
        <Thumbnail 
            link="/techego-print"
            image="https://www.techego.com/images/products/print/Print-Logo-DarkBkg-350x280.png"
            title="Print: Dynamic template tool for Podio's workflow automation platform."
            year="2016"
            category="TECHeGo"
            techstack="Laravel, React"
        />
        <Thumbnail 
            link="/techego-print"
            image="https://www.techego.com/images/products/sync/Sync-Logo-DarkBkg-344x280.png"
            title="Sync: Automated data back for your organization on the Podio platform."
            year="2016"
            category="TECHeGO"
            techstack="Laravel, React"
        />
        
      </div>
    </div>
  )
}
 
export default Projects;