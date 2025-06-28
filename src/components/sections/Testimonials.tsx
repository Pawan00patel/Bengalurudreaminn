import React, { useRef } from 'react';
import Slider from 'react-slick';
import { testimonialsData, Testimonial } from '../../data/testimonialsData';
import '../../styles/Testimonials.css';

function Testimonials(): JSX.Element {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current?.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div className='testimonials'>
                    <div className='testimonials--header'>
                        <h1>Testimonials</h1>
                    </div>
                    <div className='testimonials--body'>
                        <div className='testimonials--slider'>
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test: Testimonial) => (
                                    <div className='single--testimony' key={test.id}>
                                        <div className='testimonials--container'>
                                            <div className='review--img'>
                                                <img src={test.image} alt={test.name} />
                                            </div>
                                            <div className='review--content'>
                                                <p>{test.text}</p>
                                                <h1>{test.name}</h1>
                                                <h4>{test.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button className='prevBtn' onClick={gotoPrev}>
                                Prev
                            </button>
                            <button className='nextBtn' onClick={gotoNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
