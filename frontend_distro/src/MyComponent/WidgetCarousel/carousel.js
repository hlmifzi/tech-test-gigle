import React from 'react'
import { Carousel } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';


export const carouselSkeleton = ({ datas }) => {

    let CarouselItem = datas.map((v, i) => {
        return (
            <Carousel.Item key={i}>
                <img
                    className="d-block w-100"
                    src={v.imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{v.mainText}</h3>
                    <p>{v.descText}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return (

        <Carousel>
            {CarouselItem || <Skeleton />}
        </Carousel>
    )
}
