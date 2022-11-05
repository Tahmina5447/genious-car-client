import React from 'react';
import './slide.css'

const SingleSlide = ({data}) => {
    const {img,id,prev,next}=data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='slide-img'>
                    <img src={img}  alt="" className="w-full" />
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className='absolute transform -translate-y-1/2  left-8 top-1/2 w-1/2'>
                    <h1 className='text-6xl text-white font bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white text-semibold my-6'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn btn-error text-white mr-3'>DISCOVER MORE</button>
                        <button className=' btn btn-white text-white btn-outline'>LATEST PROJECT</button>
                    </div>
                </div>
            </div>
    );
};

export default SingleSlide;