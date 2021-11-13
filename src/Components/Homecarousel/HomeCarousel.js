import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomeCarousel.css'
import HomeCardMain from '../HomeCardMain/HomeCardMain'

function HomeCarousel() {
    return (
        <div className='relative'>
            <Carousel

                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                interval={4000}

                showThumbs={false}
            >
                <div>

                    <img loading='lazy'  src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="" />
                </div>
                               
                <div>
                    <img
                        loading='lazy'
                        src="https://m.media-amazon.com/images/I/61QLCFeLOIL._SX3000_.jpg"
                        alt="Second slide"
                    />
                    
                </div>
                


                <div>
                    <img
                        loading='lazy'
                        src="https://m.media-amazon.com/images/I/71lK+PFrZYL._SX3000_.jpg"
                        alt="Third slide"
                    />

                </div>

                <div>
                    <img
                        loading='lazy'
                        src="https://m.media-amazon.com/images/I/91Vb4VLoWLL._SX3000_.jpg"
                        alt="Third slide"
                    />

                </div>
                <div>
                    <img
                        loading='lazy'
                        src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg"
                        alt="Third slide"
                    />

                </div>
                <div>
                    <img
                        loading='lazy'
                        src=" https://m.media-amazon.com/images/I/91L6jLxGErL._SX3000_.jpg"
                        alt="Third slide"
                    />
                </div>

                <div>
                    <img
                        loading='lazy'
                        src="https://m.media-amazon.com/images/I/713ML75rA0L._SX3000_.jpg"
                        alt="Third slide"
                    />

                </div>


            </Carousel>

        </div>
    )
}

export default HomeCarousel
