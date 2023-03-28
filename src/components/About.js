import React from 'react'
import image from './images/adi.jpeg'

export default function About() {
  return (
    <>
    <div className='container1'>
      <div className="one">
        <img src={image} alt=""/>
        <div className="about">
          <h3>Aditya Singh Somvanshi</h3>
          <p>Lorem,est praesentium eveniet nam labore dignissimos fuga, eaque numquam voluptatum, ipsum beatae aliquam.</p>
        </div>
      </div>
      <div className="two">
        <h3>More About Me </h3>
        <p>
          My Hobbies
          <li>Learning New Things</li>
          <li>Developing New Skill</li>
          <li>Invention</li>
          <li>Coding</li>
          <li>Designing</li>
        </p>
      </div>
      <div className="three">
        <h3>My Dream</h3>
        <p> I Wan To Be
          <li>A Student</li>
          <li>Billioniere</li>
          <li>Entrepreneur</li>
          <li>Inventor</li>
          <li>Dharm Rakshak</li>
        </p>
      </div>
    </div>
    <div className="my-side">
      <div className='my-group'>
        <div className="item-1">Humanity</div>
      </div>
      <div className='my-group'>
        <div className="item-2">Hard & Smart Work</div>
        <div className="item-3">Keep Learining</div>
      </div>
      <div className='my-group'>
        <div className='item-4'>Physically Fit</div>
        <div className='item-5'>Acquire Knwoledge</div>
        <div className='item-6'>Acquire Skills</div>
      </div>
      <div className='my-group'>
        <div className="item-7">Oberservative</div>
        <div className="item-8">Strong Mindset</div>
      </div>
      <div className='my-group'>
        <div className="item-9">Believe In Yourself</div>
      </div>
    </div>
    </>
  )
}
