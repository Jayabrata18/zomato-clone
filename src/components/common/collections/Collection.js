import React from 'react'
import './collection.css'
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
import Slider from 'react-slick'


const settings = {
    Infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    preArrow: <PrevArrow/>,
};

const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className="max-width collection">
            <div className="collection-title">Collection</div>
            <div className="collection-subtitle-row">
            <div className="collection-subtitle-text">
                Explore curated lists of top restaurants, cafe, pubs, and bars in Lucknow, based on trends
            </div>
            <div className="collection-location">
                <div>All collections in lucknow</div>
                <i className="fi fi-rr-caret-right absolute-center"></i>
            </div>
        </div>
        <Slider  {...settings}>
            {list.map((item) =>(
                <div>
                    <div className="collection-cover">
                        <img src={item.cover} className="collection-image" alt={item.title} />
                    <div className="gradient-bg"></div>
                    <div className="collection-card-title">{item.title}</div> 
                    <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i className="fi fi-rr-caret-right absolute-center"></i>   
                    </div>
                 </div>
                </div>
            ))}

        </Slider>
        </div>
    </div>
  )
}

export default Collection