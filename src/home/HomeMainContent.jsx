import '../styles/home-main-content.css'
import mission from '../assets/icons/icons8-mission-77.png'
import vision from '../assets/icons/icons8-vision-77.png'

import featureImg from '../assets/images/pexels-cookiecutter-1148820.jpg'
export default function HomeContent(){
  
    return(
   <div className="main-content">
       <div className="about">
          <p>About Bodire Technologies</p>
          <h5>Bodire Technologies is an accredited IT service provider specializing in delivering tailored solutions that include network cabling, hardware supply, and advanced security systems, ensuring seamless connectivity and protection for our client's operations.</h5>
      </div>
      <div className="vision-mission">
      <div className="vision">
        <div className="icon-container">
        <img src={vision} alt="" />
        </div>
         <p className="boldText" >Vision</p>
         <p>To be a leading force in the telecommunications industry, recognized for our commitment to innovation, excellence, and the empowerment of our community through exceptional service and opportunities for growth.</p>
      </div>

      <div className="vision">
        <div className="icon-container">
          <img src={mission} alt="" />
        </div>
         <p className="boldText">Mission</p>
         <p>Our mission is to deliver superior IT solutions that bridge the technology gap in our country, providing reliable support and exceptional service to businesses of all sizes while fostering a culture of continuous improvement and client satisfaction</p>
      </div>
      </div>
       
       <div className="whatWeoffer">

       <div className="firstbox">
       <div>
       <h1>What we offer</h1>
       <p>At Bodire Technologies, we deliver comprehensive IT solutions, specializing in network infrastructure, security systems, and hardware, with a commitment to quality and customer satisfaction</p>
       </div>
     </div>
   
      <div className="flexboxes">
        <div className="flexbox">
          <div className="icon-containers">

          </div>
          <p  className="title" >IT Hardware</p>
          <p className="description">We provide a selection of high-quality laptops, computers, and accessories tailored to meet the needs of businesses and individuals</p>
        </div>
        <div className="flexbox">
          <div className="icon-containers">

          </div>
          <p className="title">Network  Cabling Solution</p>
          <p className="description">Our team specializes in structured voice and data cabling, fiber optic networks, and cable management to ensure reliable and efficient connectivity for your operations</p>
        </div>
        <div className="flexbox">
          <div className="icon-containers">
 
          </div>
          <p  className="title" >Data Center Management</p>
          <p className="description">We design and manage data centers and server rooms to ensure optimal performance, security, and reliability for your critical IT infrastructure.</p>
        </div>
        <div className="flexbox">
          <div className="icon-containers">
             
          </div>
          <p  className="title" >IT Hardware</p>
         
          <p className="description">We provide a selection of high-quality laptops, computers, and accessories tailored to meet the needs of businesses and individuals</p>
        </div>
      </div>
      </div>

      <div className="dedicated">
       <div>
       <p className="left-p-element">At Bodire Technologies, we are dedicated to driving positive change.</p>
       </div>
      <div className="grid-display">
       <div className="top-element">
        <p className="number">01</p>
        <p> Proudly Local</p>
       </div>
         <p className="lower-element">We are committed to supporting local businesses and       driving economic growth within our community.</p>
      </div>
      <div className="grid-display">
        <div className="top-element">
         <p className="number">02</p>
         <p>   Eco-Friendly Practice</p>
        </div>
          <p className="lower-element">We prioritize sustainability by implementing environmentally responsible practices in our operations and solutions.</p>
       </div>
       <div className="grid-display">
        <div className="top-element">
         <p className="number">03</p>
         <p> Continuous Improvement</p>
        </div>
          <p className="lower-element">We embrace a culture of innovation and learning, continually refining our processes and services to exceed client expectations.</p>
       </div>
    </div>

    <div className="features">
        <h1>Our Features</h1>
        <div className="feature-main-content">
          <div className="ourFeatures">

           <img src={featureImg} alt="" />
            
           <div>
             <h1>Designing and Building a Grand Design</h1>
            <p>A new home that makes the most of our magnificent countryside and panoramic views is key to any project, leaving a legacy for years to come. Bringing natural light into the home is essential, creating a sense of space while blurring the line between inside and out. This not only shapes the overall aesthetics but enhances the living experience by seamlessly connecting the home with its surroundings.</p>

            </div>
           
          </div>
        
          
        </div>
    </div>
   </div>
      

    );
}