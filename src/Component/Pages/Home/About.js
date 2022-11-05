import React from 'react';
import aboutPerson from '../../../assets/images/about_us/person.jpg'
import aboutParts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2  relative'>
                    <img className='w-4/5 h-full ' src={aboutPerson} alt="" />
                    <img className='w-3/6 h-full   absolute  right-5 top-1/2' src={aboutParts} alt="" />
                    
                </div>
                
                <div className='w-1/2'>
                    <p className='text-error mb-6 text-xl font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-error">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;