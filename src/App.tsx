
import './App.css'
import { Navbar} from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, Home, Projects, Mushroom, ComputerVision } from "./components/pages";
import { BlogBar} from "./components/BlogBar.tsx";

function App() {
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.add('hidden');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>observer.observe(el));
  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home/><BlogBar/></>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/computervision" element={<><ComputerVision/><BlogBar/></>}/>
        {/* <Route path="/blog/computervision" element={<ComputerVision />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mushroom" element={<Mushroom />} />
      </Routes>
       
      </div>
    </>
  )
}

export default App
