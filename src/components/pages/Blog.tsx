

import {Link} from 'react-router-dom';
export const Blog = () => {
  return (

<div className="blogBodyTSX">
<h1>BLOGS</h1>
<br/>
<div className="content">
        <Link to="/blog/gsoc2024">
        <div>
          <img src="\Gsocpng.png" alt='GSoC 2024'/>
          <p>
          <h3>
          My GSoC 2024 Contribution! (COMING SOON)
          </h3>
          I am applying as a GSoC student this year. I am writing this blog when the GSoC student application period is about to begin. 
          This blog will cover the journey of applying for the GSoc organization and the challenges I faced during it and how I tackled them.
          I have handwritten this section of my website rather than using ChatGPT to show my commitment and ingenuity in crafting a personalized touch for my audience.
          </p>
        </div>
        </Link>

        <Link to="/blog/computervision">
        <div>
          <img src="\mushHabitat.jpg" />
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

        
        <Link to="https://github.com/Shaburu/r3f-vite-starter#readme">
        <div>
          <img src="\cleopatra.png" />
          <p>
          <h3> Cleopatra - your AI Internet Shopper</h3>  
          andi mandi sandi ignore kardo warna! sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Link>
        
       
        
  </div>
</div>
  );
};