import React from 'react';
import img1 from '../../assets/carousel img/img1.jpg'
import img2 from '../../assets/carousel img/img2.jpg'
import img3 from '../../assets/carousel img/img3.jpg'
import img4 from '../../assets/carousel img/img4.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-1/3">
                    <img src={img1} className="w-full" alt='' />
                    <div className='absolute left-1/3 top-1/3 text-center text-white'>
                        <h1 className='text-5xl'>Hello! I'm Jinnah</h1>
                        <p className='font-medium'>A photographer specializing in Landscape + Nature PhotoArt</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-1/3">
                    <img src={img2} className="w-full" alt='' />
                    <div className='absolute left-1/3 top-1/3 text-center text-white'>
                        <h1 className='text-5xl'>Hello! I'm Jinnah</h1>
                        <p className='font-medium'>A photographer specializing in Landscape + Nature PhotoArt</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-1/3">
                    <img src={img3} className="w-full" alt='' />
                    <div className='absolute left-1/3 top-1/3 text-center text-white'>
                        <h1 className='text-5xl'>Hello! I'm Jinnah</h1>
                        <p className='font-medium'>A photographer specializing in Landscape + Nature PhotoArt</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-1/3">
                    <img src={img4} className="w-full " alt='' />
                    <div className='absolute left-1/3 top-1/3 text-center text-white'>
                        <h1 className='text-5xl'>Hello! I'm Jinnah</h1>
                        <p className='font-medium'>A photographer specializing in Landscape + Nature PhotoArt</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;