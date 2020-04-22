import React from 'react';
import './About.css';
import placeholder from './placeholder.jpg'
import VictoriaM from './VictoriaM.jpeg'
 
class About extends React.Component {
    render() {
        return (
       
      <React.Fragment>

          <h1>About Get Meals</h1>
          <p>Get Meals was created by a group of students at Thinkful who all of the like mind of wanting to create something that will help people. The app was born in the midst of the COVID-19 out of a want to help people easily find places where they can get free meals, the location of food banks and places that provide discounts to our military, healthcare workers, etc.</p>
        
         <h1>Meet the Team</h1>
      



<div className="parentView">

<div className="item">
         <h2>John</h2>
         
          <img
            src= {placeholder}
            alt="avatar"
            className="avatar-image"/>

          
          <p>John is a bioengineer transitioning to the software development world. He's just a nerd. When he has free time, John can be found doing something active outdoors (e.g. hiking a 14er, snowboarding). He is currently based out of Denver, CO.</p>
</div>
        
          
     
<div className="item">
         <h2>Victora</h2>
         
          <img
            src= {VictoriaM}
            alt="avatar"
            className="avatar-image" />

          
          <p>About text here.</p>
 </div>

 <div className="item">
         <h2>Sejin</h2>
         
          <img
            src= {placeholder}
            alt="avatar"
            className="avatar-image" />

          
          <p>About text here.</p>
 </div>

<div className="item">
         <h2>Zach</h2>
         
          <img
            src= {placeholder}
            alt="avatar"
            className="avatar-image" />

          
          <p>About text here.</p>
 </div>

<div className="item">
         <h2>Peggy</h2>
         
          <img
            src= {placeholder}
            alt="avatar"
            className="avatar-image" />

          
          <p>About text here.</p>
 </div>
   
          </div>
          </React.Fragment>
        
        
    
       
    );
}
}
 
export default About;