import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
  
<div className="blogBody">
<div > <h1>
   Hey! I work with Computer Vision, AI and build
    IoTs & Fullstack WebApps.
   <img src='/melt.png' alt="Melting Face on Apple iOS 16.4" width="32" height="32" />
   </h1>
      <br></br>
      <div className="message">
        🐷 Check out my <Link className="message" to="/blog"> Blogs </Link>
        for in-depth analysis of the
        <Link to="/projects" className="message"> Projects </Link>
        i build! Currently working with GANs, LLMs, NLPs, OpenCV and Three Js.
      </div>
      <br></br>
      <div className="paraThree">
        <div className="item1">
          <h3>Hey I'm Sarthak Chowdhary aka Shaburu&#8482;</h3> <br></br>
        Im a Final Year Student Pursuing my B.Tech in ECE Engineering from VJTI,Mumbai and have been building apps since the 6th Grade
        I have handwritten this section of my website rather than using ChatGPT to show my commitment and ingenuity in crafting a personalized touch for my audience.
        I love building products be it IoT Devices, Games, Interactive Face Filters or software.
        <br></br>
        <br></br>
        Do Checkout my upcoming blog about my Journey in open source!
          {/* <div className="designStack">
            Design Stack
            <div className="designStackChild">
            <div >PhotoShop</div>
            <div >Premiere Pro</div>
            <div >After Effects</div>
            <div >Adobe</div>
            <div >Adobe</div>
         
            </div>
         </div> */}
        </div>

 <div className="item2">
  <p>Skillz</p>
  <div>Adobe Suite<br/></div>
  <div>Blender<br/></div>
  <div>C#<br/></div>
  <div>Docker<br/></div>
  <div>MERN &#x269B;<br/></div>
  <div>OpenCV<br/></div>
  <div>Python<br/></div>
  <div>PyTorch&#10024;</div>
  <div>Unity<br/></div>
 </div>
      </div>
        
      
</div>

<div className="restBody">


<h2><Link to="/blog">Blogs</Link></h2>

<div className="content">
        <Link to="/blog/gsoc2024">
        <div>
          <img src="\Gsocpng.png" alt='GSoC 2024'/>
          <p>
          <h3>
          My GSoC 2024 Contribution! (COMING SOON)
          </h3>
          I am applying as a GSoC student this year.I am writing this blog when the GSoC student application period is about to begin. 
          This blog will cover the journey of applying for the GSoc organization and the challenges I faced during it and how I tackled them. 
          I see myself as a problem solver rather than a programmer. Im not constrained to any Language.
                 </p>
        </div>
        </Link>

        <Link to="/blog/computervision">
        <div>
          <img src="\mushHabitat.jpg" alt='mushroom habitat '/>
          <p>
          <h3>
          Computer Vision and Machine Learning to build an Advanced Mushroom Habitat  
          </h3>
          The primary objective of this research is to uncover the optimal growth conditions for various mushroom species. Through a meticulous process of cultivating mushrooms on agar plates, we aim to identify the specific temperature, humidity, light, and nutrient levels that promote their robust development. By meticulously documenting each growth stage and comparing the effects of varying factors, we hope to refine cultivation techniques for both culinary and medicinal mushroom varieties.
          </p>
        </div>
        </Link>

        <Link to="/blog">
        <div>
          <img src="\face.gif" />
          <p>
          <h3> Augmented Reality Development and Face Tracking using SparkAR and JavaScript!</h3>  
          I've created several Filters some that let's you track a 3D object 
        onto a plane in AR, some that take the runtime of the application and make a little game
        One such is a cat filter that was accepted by Instagram and has over 13Million impressions
       </p>
       </div>
        </Link>
        
       
        
  </div>
  <br></br>
  <h2><Link to="/projects">Projects</Link></h2>

      <h3 className="cleoTit"><Link to="/mushroom" >Mushroom Chamber &#128279;</Link></h3>
      <div className="cleopatra">
        <p className="cleo"><Link to="/mushroom">
          <img src="/mush.gif" alt="cleopatra an ai virtual assistant with purple hair and celestial body" />
          </Link></p>
        <p className="cleoWord">
          <h3>OPEN-SOURCED, PLEASE CONTRIBUTE</h3>
          A platform for enthusiasts, hobbyists, and researchers to cultivate mushrooms with precision and efficiency.
          We're designing a state-of-the-art chamber that leverages cutting-edge technology to provide the optimal environment for mushroom growth. 
          And here's the exciting part: it's open-source. This means that every step of our design, every bit of our code, will be freely available to all. 
          Together, we can make mushroom cultivation accessible to anyone with a passion for fungi.
          Democratizing mushroom cultivation. Your contributions will help refine the design, 
          improve the technology, and ensure that this invaluable knowledge reaches everyone who's eager to learn.
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScL5KAuP0R7oZApncHH1aanYFCK9dT5PTG2j7pawV1wrGUd6w/viewform?embedded=true" width="300px" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
       </p>
      </div>
      
      
{/* <h2><Link to="/blog" className="restBody">Blogssss</Link></h2>
<br/>
<h2><Link to="/contact" className="restBody">Contactss</Link></h2> */}

<div className="contactLinksHome">
    <a href="https://www.instagram.com/shaburux/">INSTAGRAM</a> 
    <a href="https://twitter.com/ShaburuX">TWITTER</a> 
    <a href="https://www.youtube.com/@Shaburu69/featured">YOUTUBE</a> 
    <a href="https://www.github.com/shaburu/">GITHUB</a>
    
</div>
</div>


<div className="message">
        <h1>
          BE YOURSELF AND DO THINGS YOU WANT TO DO.
          <br/><br/>

        </h1>
      </div>
      <footer className="footer">made with ♥ by Shaburu</footer>

</div>
    );
};