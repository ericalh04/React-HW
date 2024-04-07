import './App.css';
import { useState } from 'react';

const projects = [
  { title: "Project 1", content: "Project 1 Description" },
  { title: "Project 2", content: "Project 2 Description" },
  { title: "Project 3", content: "Project 3 Description" },
  { title: "Project 4", content: "Project 4 Description" }
];

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <li className='navbar-name'>
            Erica Honadel
          </li>
          <ul className='nav-menu'>
            <li className='nav-item'>
              About Me
            </li>
            <li className='nav-item'>
              Projects
            </li>
            <li className='nav-item'>
                Contact
            </li>            
          </ul>
        </div>
      </nav>
    </>
  );
}

function Homepage() {
  return (
    <div className='homepage'>
      <h1>Hello!</h1>
      <p>My name is Erica and I am a freshman studying computer science and math at the University of Maryland!</p>
    </div>
  );
}

function Projects({ title, content, darkMode }) {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(!clicked)
  }
  return (
    <>
      <div className={"project " + (darkMode && "dark")} onClick={handleClick}>
        <h3 className='label'>{title}</h3>
        <p className='label'>{content}</p>
      </div>
    </>    
  );
}

function Contact() {
  return (
    <div className='container'>
      <h1 className='label'>Contact Information</h1>
      <p className='label'>Personal Email: ericalh04@gmail.com</p>
      <p className='label'>School Email: ehonade1@terpmail.umd.edu</p>
      <p className='label'>Phone: 443-619-2860</p>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className='footer'>
        <p>Erica Honadel</p>
      </div>
    </>
  );
}

function App() {
  const [dark, setDark] = useState(false)

  function handleClick() {
    setDark(!dark)
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <h1 className="label">Projects</h1>
      <div>     
        {projects.map((element) => (
          <Projects title={element.title} content={element.content} darkMode={dark}/>
        ))}
      </div>
      <Contact></Contact>
      <Footer></Footer>
      <div>
        <button onClick={handleClick}>
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
