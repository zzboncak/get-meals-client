import React from 'react';
import './About.css';
import placeholder from './placeholder.jpg'
import VictoriaM from './VictoriaM.jpeg'
import ZackZ from './ZackZ.jpeg'
import PeggyS from './PeggyS.jpg'
import JohnL from './JohnL.jpeg'
import SejinH from './SejinH.jpeg'

class About extends React.Component {
  render() {
    return (

      <React.Fragment>

        <div className='about-header'>
          <h1>About Get Meals</h1>
          <p>Get Meals was created by a group of students at Thinkful who all of the like mind of wanting to create something that will help people. The app was born in the midst of the COVID-19 out of a want to help people easily find places where they can get free meals, the location of food banks and places that provide discounts to our military, healthcare workers, etc.</p>

          <h1>Meet the Team</h1>

        </div>

        <div className="parentView">

          <div className="item">
            <h2>John</h2>

            <img
              src={JohnL}
              alt="John Lee"
              className="avatar-image" />


            <p>John is a bioengineer transitioning to the software development world. He's just a nerd. When he has free time, John can be found doing something active outdoors (e.g. hiking a 14er, snowboarding). He is currently based out of Denver, CO. <a href="https://johlee92.github.io/personalPortfolio/" target="_blank" rel='noreferrer noopener'>Here</a> is his portfolio.</p>

          </div>



          <div className="item">
            <h2>Victoria</h2>

            <img
              src={VictoriaM}
              alt="Victoria Moore"
              className="avatar-image" />


            <p>Victoria is aspiring to be a software developer, she is especially looking forward to continuing to expand her knowledge and problem-solving skills that are needed for different areas of development. In her free time, she loves reading, watching films, and occasionally knitting and other crafts.</p>
          </div>

          <div className="item">
            <h2>Sejin</h2>

            <img
              src={SejinH}
              alt="Sejin Hwang"
              className="avatar-image" />


            <p>Sejin is a full stack web developer who enjoys the journey of every challenge. He is always looking to learn and improve, whether that through software development, sports, or even a simple youtube video.  You can find him often golfing, playing basketball, or enjoying the great outdoors of the PNW.   </p>
          </div>

          <div className="item">
            <h2>Zack</h2>

            <img
              src={ZackZ}
              alt="Zack Zboncak"
              className="avatar-image" />


            <p>Zack is a husband and father of three young boys. He has a wide array of interest, which shows from his degrees in physics and Old Testament. A problem solver at heart, he applies his newfound love for coding to projects like Get Meals. You can checkout his other projects <a href="https://zzboncak.github.io/Portfolio/" target="_blank" rel='noreferrer noopener'>here</a>.</p>
          </div>

          <div className="item">
            <h2>Peggy</h2>

            <img
              src={PeggyS}
              alt="avatar"
              className="avatar-image" />


            <p>Peggy is a Senior QA Engineer whose main goal for every project that she works on is being an advocate for the user. In her spare time she enjoys cooking plant based meals, running and seeing as much live music as possible.</p>
          </div>

        </div>
      </React.Fragment>




    );
  }
}

export default About;