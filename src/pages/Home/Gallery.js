import React from 'react';
import gallery from '../../assets/home img/gallery.jpg'

const Gallery = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${gallery})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-medium">Gallery</h1>
                        <p className="mb-5">Every picture is a moment in a story!!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;