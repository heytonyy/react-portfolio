import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel({ props }) {
    const { src, alt } = props;

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={src}
                    alt={alt}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;